import React from "react";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
//import "./index.css";
import App from "./App";
import toast, { Toaster } from 'react-hot-toast';
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";
const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

const queryClient = new QueryClient();

store.subscribe(() => {
  saveState(store);
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </QueryClientProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
