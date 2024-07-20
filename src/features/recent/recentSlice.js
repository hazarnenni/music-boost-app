import { createSlice } from '@reduxjs/toolkit';
import { recentlyListenedTracks, recentlySearchedArtists } from '../../data/tracks';

const initialState = {
  recentlyListened: recentlyListenedTracks,
  recentlySearchedArtists: recentlySearchedArtists,
};

export const recentSlice = createSlice({
  name: 'recent',
  initialState,
  reducers: {
    addRecentlyListened: (state, action) => {
      state.recentlyListened = [action.payload, ...state.recentlyListened.slice(0, 4)];
    },
    addRecentlySearchedArtist: (state, action) => {
      state.recentlySearchedArtists = [action.payload, ...state.recentlySearchedArtists.slice(0, 4)];
    },
  },
});

export const { addRecentlyListened, addRecentlySearchedArtist } = recentSlice.actions;

export default recentSlice.reducer;
