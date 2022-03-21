/*
*
* Home reducers
* make by phamthainb
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsHome, StoreHome } from "./types";

const initState : StoreHome = { };

const reducersHome : Reducer<StoreHome, ActionsHome> = (state = initState, actions: ActionsHome) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersHome;