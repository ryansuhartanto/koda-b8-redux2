import { combineReducers } from "@reduxjs/toolkit";

import todo from "./todo";

const reducer = combineReducers({
	todo,
});

export default reducer;
