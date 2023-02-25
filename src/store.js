import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import playerReducer from './redux/features/playerSlice';

import { shazamCoreApi } from './redux/services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]:shazamCoreApi.reducer,
    player: playerReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
