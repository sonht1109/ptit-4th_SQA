/*
*
* Supplier reducers
* make by phamthainb
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsSupplier, StoreSupplier } from "./types";

const initState : StoreSupplier = { };

const reducersSupplier : Reducer<StoreSupplier, ActionsSupplier> = (state = initState, actions: ActionsSupplier) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersSupplier;