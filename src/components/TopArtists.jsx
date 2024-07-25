import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      const response = await axios.get('http://localhost:4000/api/artists');
      setArtists(response.data);
      setLoading(false);
    };

    fetchArtists();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Top Artists</h2>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
              <img src={artist.picture_medium} alt={artist.name} className="rounded-full mb-2 w-32 h-32 object-cover mx-auto" />
              <h3 className="text-lg font-bold text-white">{artist.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopArtists;