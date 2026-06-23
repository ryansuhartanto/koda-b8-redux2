import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./reducers";

const persistedReducer = persistReducer(
	{
		key: "todo",
		storage,
	},
	reducer,
);

const store = configureStore(persistedReducer);

export default store;

export const persistor = persistStore(store);
