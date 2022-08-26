import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Unit} from './unit.model';

@model({
  settings: {
    postgresql: { schema: 'public', table: 'meter'},
    foreignKeys: {
      fk_meter_unitId: {
        name: 'fk_meter_unit_id',
        entity: 'Unit',
        entityKey: 'id',
        foreignKey: 'unit_id',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
      },
    },
  },
})
export class Meter extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @belongsTo(() => Unit, {name: 'unit'}, {postgresql: {columnName: 'unit_id'}})
  unitId: number;

  constructor(data?: Partial<Meter>) {
    super(data);
  }
}

export interface MeterRelations {
  // describe navigational properties here
}

export type MeterWithRelations = Meter & MeterRelations;
