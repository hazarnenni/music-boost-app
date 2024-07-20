import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTrack: null,
  isPlaying: false,
  playlist: [],
};

export const PlayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playTrack: (state, action) => {
      state.currentTrack = action.payload.track;
      state.isPlaying = true;
    },
    pauseTrack: (state) => {
      state.isPlaying = false;
    },
    addToPlaylist: (state, action) => {
      state.playlist.push(action.payload.track);
    },
  },
});

export const { playTrack, pauseTrack, addToPlaylist } = PlayerSlice.actions;

export default PlayerSlice.reducer;
