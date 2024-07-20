import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../features/search/searchSlice';
import { tracks } from '../data/tracks';
import MusicCard from './MusicCard';

const MainContent = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);
  const recentlyListened = useSelector((state) => state.recent.recentlyListened);
  const recentlySearchedArtists = useSelector((state) => state.recent.recentlySearchedArtists);

  useEffect(() => {
    if (query) {
      const filteredTracks = tracks.filter((track) =>
        track.title.toLowerCase().includes(query.toLowerCase()) ||
        track.artist.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(setSearchResults(filteredTracks));
    } else {
      dispatch(setSearchResults(tracks));
    }
  }, [query, dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for songs, artists..."
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={query}
          onChange={handleSearchChange}
        />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Discover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Top Music (Recently Listened)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentlyListened.map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Top Artists (Recently Searched)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentlySearchedArtists.map((artist) => (
            <div key={artist.id} className="bg-gray-800 p-4 rounded-lg text-center">
              <img src={artist.image} alt={artist.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-white mt-4">{artist.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
