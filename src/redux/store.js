import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./persist";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);