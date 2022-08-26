import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Unit, UnitRelations} from '../models';

export class UnitRepository extends DefaultCrudRepository<
  Unit,
  typeof Unit.prototype.id,
  UnitRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Unit, dataSource);
  }
}
