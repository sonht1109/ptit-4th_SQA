/*
*
* Login selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectLoginStore = ((state: ReturnType<typeof rootReducer>) => state.Login)