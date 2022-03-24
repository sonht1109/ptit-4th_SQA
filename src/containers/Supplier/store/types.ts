/*
*
* Supplier types
* make by phamthainb
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreSupplier {}

export type ActionsSupplier = ActionType<typeof actions>;