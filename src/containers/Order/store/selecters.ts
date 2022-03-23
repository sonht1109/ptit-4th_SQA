/*
*
* Order selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectOrderStore = ((state: ReturnType<typeof rootReducer>) => state.Order)