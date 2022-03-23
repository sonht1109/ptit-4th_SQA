/*
*
* Product selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectProductStore = ((state: ReturnType<typeof rootReducer>) => state.Product)