import React, { useEffect, useState } from 'react';
import DeezerAPI from '../utils/deezer';

const MainContent = () => {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [loadingAlbums, setLoadingAlbums] = useState(false);
  const [loadingArtists, setLoadingArtists] = useState(false);
  const [loadingTracks, setLoadingTracks] = useState(false);

  useEffect(() => {
    const fetchRandomAlbums = async () => {
      setLoadingAlbums(true);
      const data = await DeezerAPI.fetchRandomAlbums();
      setAlbums(data);
      setLoadingAlbums(false);
    };

    const fetchTopArtists = async () => {
      setLoadingArtists(true);
      const data = await DeezerAPI.fetchTopArtists();
      setArtists(data);
      setLoadingArtists(false);
    };

    const fetchTopTracks = async () => {
      setLoadingTracks(true);
      const data = await DeezerAPI.fetchTopTracks();
      setTracks(data);
      setLoadingTracks(false);
    };

    fetchRandomAlbums();
    fetchTopArtists();
    fetchTopTracks();
  }, []);

  return (
    <div className="flex p-6 bg-gray-900">
      {/* Main Content Area */}
      <div className="flex-1 mr-6">
        <h1 className="text-3xl font-bold text-white mb-6">Music Discovery</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Discover Albums</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loadingAlbums ? (
              <p className="text-white">Loading albums...</p>
            ) : (
              albums.map((album) => (
                <div key={album.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <img src={album.cover_medium} alt={album.title} className="rounded mb-2 w-full h-48 object-cover" />
                  <h3 className="text-lg font-bold text-white">{album.title}</h3>
                  <p className="text-gray-400">By {album.artist.name}</p>
                </div>
              ))
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Top Tracks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loadingTracks ? (
              <p className="text-white">Loading tracks...</p>
            ) : (
              tracks.map((track) => (
                <div key={track.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center">
                  <img src={track.album.cover_medium} alt={track.title} className="rounded mb-2 w-full h-48 object-cover" />
                  <h3 className="text-lg font-bold text-white">{track.title}</h3>
                  <p className="text-gray-400">By {track.artist.name}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      {/* Sidebar for Top Artists */}
      <div className="w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Top Artists</h2>
        <div className="flex flex-col space-y-4">
          {loadingArtists ? (
            <p className="text-white">Loading artists...</p>
          ) : (
            artists.map((artist) => (
              <div key={artist.id} className="bg-gray-700 p-4 rounded-lg flex items-center transition-transform transform hover:scale-105">
                <img src={artist.picture_medium} alt={artist.name} className="rounded-full w-16 h-16 object-cover mr-4" />
                <h3 className="text-lg font-bold text-white">{artist.name}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;