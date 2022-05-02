import { useReducer } from "react";
import { combineReducers } from "redux";
import {userReducer} from "../store/user/user.reducer"

export const rootReducer = combineReducers({
    user: userReducer,
})