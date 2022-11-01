import { combineReducers } from "redux";

import cart from "./cart";
import auth from "./auth";
import products from "./products";

export const reducers = combineReducers({ cart, auth, products });
