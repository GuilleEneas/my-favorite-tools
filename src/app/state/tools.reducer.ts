import { Action, createReducer, on } from '@ngrx/store';
import { Tool } from '../models/tool.type';
import { sortTools } from './sort-tools.actions';
import * as _ from 'lodash';
import { rateTool } from './rate-tool.actions';

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

const toolsReducer = createReducer(
  initialState,
  on(sortTools, state => [..._.cloneDeep(state).sort((a, b) => b.rating - a.rating)]),
  on(rateTool, (state: State, { index, rating }: { index: number; rating: number }) =>
    [...state.slice(0, index), { ...state[index], rating }, ...state.slice(index + 1)].filter(({ name }) =>
      Boolean(name)
    )
  )
);

export function reducer(state: State | undefined, action: Action) {
  return toolsReducer(state, action);
}
