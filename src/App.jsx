import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './app/store';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';
import TopArtists from './components/TopArtists'; 
import TopCharts from './components/TopCharts';
import './index.css';
import Playlists from './components/Playlists';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex h-screen bg-gray-900">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Routes>
              <Route path="/discover" element={<MainContent />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/" element={<MainContent />} /> 
            </Routes>
            <Player />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;