import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');

export interface ICountState {
  count: number;
}

export const initialState: ICountState = {
  count: 1,
};

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(decrease, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(clear, (state) => ({
    ...state,
    count: 1,
  }))
);

export const featureCountSelector =
  createFeatureSelector<ICountState>('counter');
export const countSelector = createSelector(
  featureCountSelector,
  (state) => state.count
);
