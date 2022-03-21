/*
*
* Login reducers
* make by phamthainb
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsLogin, StoreLogin } from "./types";

const initState : StoreLogin = { };

const reducersLogin : Reducer<StoreLogin, ActionsLogin> = (state = initState, actions: ActionsLogin) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersLogin;