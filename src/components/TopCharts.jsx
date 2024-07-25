import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopCharts = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      const response = await axios.get('http://localhost:4000/api/tracks');
      setTracks(response.data);
      setLoading(false);
    };

    fetchTracks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Top Charts</h2>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <div key={track.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={track.album.cover_medium} alt={track.title} className="rounded mb-2 w-full h-48 object-cover" />
              <h3 className="text-lg font-bold text-white">{track.title}</h3>
              <p className="text-gray-400">By {track.artist.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopCharts;