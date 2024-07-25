import React from 'react';

const MusicCard = ({ track }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img src={track.albumCoverUrl} alt={track.title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-white mt-4">{track.title}</h3>
      <p className="text-gray-400">{track.artist}</p>
    </div>
  );
};

export default MusicCard;

