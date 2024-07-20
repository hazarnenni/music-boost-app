import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../features/player/PlayerSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    search: searchReducer,
  },
});

export default store;
