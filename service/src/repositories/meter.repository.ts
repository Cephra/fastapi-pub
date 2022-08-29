import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Meter, MeterRelations, Unit} from '../models';
import {UnitRepository} from './unit.repository';

export class MeterRepository extends DefaultCrudRepository<
  Meter,
  typeof Meter.prototype.id,
  MeterRelations
> {
  public readonly unit: BelongsToAccessor<Unit, typeof Meter.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
    @repository.getter('UnitRepository')
    protected unitRepositoryGetter: Getter<UnitRepository>,
  ) {
    super(Meter, dataSource);
    this.unit = this.createBelongsToAccessorFor('unit', unitRepositoryGetter);
    this.registerInclusionResolver('unit', this.unit.inclusionResolver);
  }
}
