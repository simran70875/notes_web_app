import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./rootReducer/root";
import {LoginMiddleware, LogoutMiddleware,} from "./middleware/localStorageMiddleware";

// Config for Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Example: Only persist the auth reducer, change as needed
};
// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LoginMiddleware, LogoutMiddleware),
});

// Create a persistor for persisting the store
export const persistor = persistStore(store);

export default store;
