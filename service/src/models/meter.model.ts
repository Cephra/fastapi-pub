import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Unit} from './unit.model';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'meter'},
    foreignKeys: {
      FK_METER_UNIT_ID: {
        name: 'FK_METER_UNIT_ID',
        entity: 'Unit',
        entityKey: 'ID',
        foreignKey: 'UNIT_ID',
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
