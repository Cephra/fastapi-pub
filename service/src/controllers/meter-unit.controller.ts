import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Meter,
  Unit,
} from '../models';
import {MeterRepository} from '../repositories';

export class MeterUnitController {
  constructor(
    @repository(MeterRepository)
    public meterRepository: MeterRepository,
  ) { }

  @get('/meters/{id}/unit', {
    responses: {
      '200': {
        description: 'Unit belonging to Meter',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Unit)},
          },
        },
      },
    },
  })
  async getUnit(
    @param.path.number('id') id: typeof Meter.prototype.id,
  ): Promise<Unit> {
    return this.meterRepository.unit(id);
  }
}
