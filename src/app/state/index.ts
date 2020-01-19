import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTools from './tools.reducer';

export interface State {
  [fromTools.toolsFeatureKey]: fromTools.State;
}

export const reducers: ActionReducerMap<State> = { [fromTools.toolsFeatureKey]: fromTools.reducer };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
