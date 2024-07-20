import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex h-screen bg-gray-900">
        <Sidebar />
        <MainContent />
        <Player />
      </div>
    </Provider>
  );
};

export default App;
