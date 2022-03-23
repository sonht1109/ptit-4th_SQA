/**
 * This file export all of type the Reducers
 * File is export only type, not the logic
 * phamthainb
 */

import { combineReducers } from "redux";
import App from "containers/App/store/reducers";
import Login from "containers/Login/store/reducers";
import Home from "containers/Home/store/reducers";
import Order from "containers/Order/store/reducers";
import Product from "containers/Product/store/reducers";
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly











//pages
const rootReducer = combineReducers({
  App,
  Login,
  Home,
  Order,
  Product,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly

  
  
  
  
  });

export default rootReducer;
