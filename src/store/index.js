import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

import reducer from "./reducers";

const persistedReducer = persistReducer(
	{
		key: "data",
		storage,
	},
	reducer,
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export const persistor = persistStore(store);
