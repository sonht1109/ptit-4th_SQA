/*
*
* Supplier selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectSupplierStore = ((state: ReturnType<typeof rootReducer>) => state.Supplier)