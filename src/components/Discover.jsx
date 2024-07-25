import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Discover = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await axios.get('http://localhost:4000/api/albums');
      setAlbums(response.data);
      setLoading(false);
    };

    fetchAlbums();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Discover Music</h2>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <div key={album.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={album.cover_medium} alt={album.title} className="rounded mb-2 w-full h-48 object-cover" />
              <h3 className="text-lg font-bold text-white">{album.title}</h3>
              <p className="text-gray-400">By {album.artist.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover;