import { combineReducers } from "redux";

import cart from "./cart";
import auth from "./auth";

export const reducers = combineReducers({ cart, auth });
