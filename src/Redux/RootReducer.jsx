import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/ShoppingReducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
