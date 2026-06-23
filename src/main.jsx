import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { PersistGate } from "redux-persist/integration/react";

import App from "#/App";
import { store, persistor } from "#/store";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
	},
]);

const root = createRoot(document.querySelector("body"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
