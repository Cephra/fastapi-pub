import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Meter} from './meter.model';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'value'},
    foreignKeys: {
      FK_VALUE_METER_ID: {
        name: 'FK_VALUE_METER_ID',
        entity: 'Meter',
        entityKey: 'ID',
        foreignKey: 'METER_ID',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
      },
    },
  },
})
export class Value extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      dataType: 'double precision',
    },
  })
  value: number;

  @property({
    type: 'date',
    required: true,
  })
  timestamp: string;

  @belongsTo(
    () => Meter,
    {name: 'meter'},
    {postgresql: {columnName: 'meter_id'}},
  )
  meterId: number;

  constructor(data?: Partial<Value>) {
    super(data);
  }
}

export interface ValueRelations {
  // describe navigational properties here
}

export type ValueWithRelations = Value & ValueRelations;
