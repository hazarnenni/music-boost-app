import React from 'react';
import MusicCard from './MusicCard';
import { tracks } from '../data/tracks';

const MainContent = () => {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Discover</h2>
      <div className="grid grid-cols-4 gap-4">
        {tracks.map((track) => (
          <MusicCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
