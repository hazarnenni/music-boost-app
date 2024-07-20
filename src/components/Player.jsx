import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playTrack, pauseTrack } from '../features/player/PlayerSlice';

const Player = () => {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.player.currentTrack);
  const isPlaying = useSelector((state) => state.player.isPlaying);

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(pauseTrack());
    } else {
      dispatch(playTrack({ track: currentTrack }));
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between">
      {currentTrack && (
        <>
          <div className="flex items-center space-x-2">
            <img src={currentTrack.albumCoverUrl} alt={currentTrack.title} className="w-12 h-12 rounded" />
            <div>
              <p className="text-sm">{currentTrack.title}</p>
              <p className="text-xs">{currentTrack.artist}</p>
            </div>
          </div>
          <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </>
      )}
    </div>
  );
};

export default Player;
