import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { UserSlice } from "./ChatSlice";
const appReducer = combineReducers({
  User: UserSlice,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["User"],
};
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
export const persistor = persistStore(store);
export default store;
