import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//* reducer
import themes from "./themes/reducer";

const rootReducer = combineReducers({
  themes,
});

const isProduction = process.env.NODE_ENV === "production";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["themes"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: isProduction ? false : composeWithDevTools(),
});

// store.__persistor = persistStore(store);
