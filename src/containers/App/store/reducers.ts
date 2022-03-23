/*
 *
 * App reducers
 *
 */
import { Reducer } from 'redux';
import * as types from './constants';
import { ActionsApp, AppStore } from './types';

const initState: AppStore = {
  lang: 'vi',
  loading: false,
  token: null,
};

const reducersApp: Reducer<AppStore, ActionsApp> = (
  state = initState,
  actions: ActionsApp,
) => {
  switch (actions.type) {
    case types.LOADING: {
      return { ...state, loading: actions.payload };
    }

    case types.LANGUAGE: {
      return { ...state, lang: actions.payload };
    }

    case types.REFETCH: {
      return { ...state, refetch: !state.token };
    }

    default:
      return { ...state };
  }
};

export default reducersApp;
