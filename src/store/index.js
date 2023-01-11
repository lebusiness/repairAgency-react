import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { servicesSlice } from './services';
import { serviceSlice } from './service';

const rootReducer = combineReducers({
  services: servicesSlice.reducer,
  service: serviceSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
