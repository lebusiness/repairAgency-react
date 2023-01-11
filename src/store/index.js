import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { servicesSlice } from './services';
import { serviceSlice } from './service';
import { cartSlice } from './cart';

const rootReducer = combineReducers({
  services: servicesSlice.reducer,
  service: serviceSlice.reducer,
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
