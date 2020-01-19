import { Action, createReducer, on } from '@ngrx/store';
import { Tool } from '../models/tool.type';
import { sortTools } from './sort-tools.actions';
import * as _ from 'lodash';
import { rateTool } from './rate-tool.actions';

export const toolsFeatureKey = 'tools';

export type State = Tool[];

export const initialState: State = [
  { name: 'hammer', rating: 0, img: 'hammer.jpg' },
  { name: 'screwdriver', rating: 0, img: 'screwdriver.jpg' },
  { name: 'spanner', rating: 0, img: 'spanner.jpg' },
  { name: 'wrench', rating: 0, img: 'wrench.jpg' },
  { name: 'drill', rating: 0, img: 'drill.jpg' },
  { name: 'saw', rating: 0, img: 'saw.jpg' },
  { name: 'pliers', rating: 0, img: 'pliers.jpg' },
  { name: 'shovel', rating: 0, img: 'shovel.jpg' },
  { name: 'rake', rating: 0, img: 'rake.jpg' },
  { name: 'sanding machine', rating: 0, img: 'sanding.jpg' }
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
