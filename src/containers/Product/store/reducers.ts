/*
*
* Product reducers
* make by phamthainb
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsProduct, StoreProduct } from "./types";

const initState : StoreProduct = { };

const reducersProduct : Reducer<StoreProduct, ActionsProduct> = (state = initState, actions: ActionsProduct) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersProduct;