import { configureStore } from '@reduxjs/toolkit';
import playerreducer from '../features/player/playerSlice'
export const store = configureStore({
  reducer: {
    player:playerreducer
  },
});
