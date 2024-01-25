import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer, ICountState } from './counter';

export interface State {
  counter: ICountState
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
