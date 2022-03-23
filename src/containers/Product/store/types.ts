/*
*
* Product types
* make by phamthainb
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreProduct {}

export type ActionsProduct = ActionType<typeof actions>;