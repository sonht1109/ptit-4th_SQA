/*
*
* Home selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectHomeStore = ((state: ReturnType<typeof rootReducer>) => state.Home)