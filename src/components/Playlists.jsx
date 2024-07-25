import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/playlists');
        setPlaylists(response.data); 
      } catch (error) {
        console.error('Error fetching playlists:', error);
        setError('Failed to fetch playlists');
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Playlists</h2>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={playlist.picture_medium} alt={playlist.title} className="rounded mb-2 w-full h-48 object-cover" />
              <h3 className="text-lg font-bold text-white">{playlist.title}</h3>
              <p className="text-gray-400">By {playlist.user ? playlist.user.name : 'Various Artists'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlists;