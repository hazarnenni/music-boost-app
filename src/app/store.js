import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../features/player/PlayerSlice';
import searchReducer from '../features/search/searchSlice';
import recentReducer from '../features/recent/recentSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    search: searchReducer,
    recent: recentReducer,
  },
});

export default store;
