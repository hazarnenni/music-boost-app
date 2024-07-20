import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../features/search/searchSlice';
import { tracks } from '../data/tracks';
import MusicCard from './MusicCard';

const MainContent = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);

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
    <div className="flex-1 p-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for songs, artists..."
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={query}
          onChange={handleSearchChange}
        />
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">Discover</h2>
      <div className="grid grid-cols-4 gap-4">
        {results.map((track) => (
          <MusicCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
