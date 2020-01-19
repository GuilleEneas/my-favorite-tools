import { Action, createReducer, on } from '@ngrx/store';
import { Tool } from '../models/tool.type';

export const toolsFeatureKey = 'tools';

export type State = Tool[];

export const initialState: State = [
  { name: 'hammer', rating: 0 },
  { name: 'screwdriver', rating: 0 },
  { name: 'spanner', rating: 0 },
  { name: 'wrench', rating: 0 },
  { name: 'drill', rating: 0 },
  { name: 'saw', rating: 0 },
  { name: 'pliers', rating: 0 },
  { name: 'shovel', rating: 0 },
  { name: 'rake', rating: 0 },
  { name: 'sanding machine', rating: 0 }
];

const toolsReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return toolsReducer(state, action);
}
