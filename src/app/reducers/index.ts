import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { COUNTER_KEY, counterReducer, ICountState } from './counter';

export interface State {
  [COUNTER_KEY]: ICountState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
