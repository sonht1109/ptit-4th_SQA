/*
*
* Order reducers
* make by phamthainb
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsOrder, StoreOrder } from "./types";

const initState : StoreOrder = { };

const reducersOrder : Reducer<StoreOrder, ActionsOrder> = (state = initState, actions: ActionsOrder) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersOrder;