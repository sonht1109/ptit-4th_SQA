/*
*
* Order types
* make by phamthainb
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreOrder {}

export type ActionsOrder = ActionType<typeof actions>;