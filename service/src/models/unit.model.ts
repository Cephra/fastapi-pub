import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'unit'},
  },
})
export class Unit extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  suffix: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  constructor(data?: Partial<Unit>) {
    super(data);
  }
}

export interface UnitRelations {
  // describe navigational properties here
}

export type UnitWithRelations = Unit & UnitRelations;
