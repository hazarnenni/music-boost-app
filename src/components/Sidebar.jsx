import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col p-6 shadow-lg">
      <div className="flex items-center mb-10 p-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white mr-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3h18v18H3V3z" />
          <path d="M9 9h6v6H9V9z" />
        </svg>
        <h1 className="text-4xl font-extrabold tracking-tight">Music Boost</h1>
      </div>
      <nav className="flex flex-col space-y-6">
        <Link to="/discover" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 7-9 7-9-7 9-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20" />
          </svg>
          <span>Discover</span>
        </Link>
        <Link to="/playlists" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Playlists</span>
        </Link>
        <Link to="/top-artists" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>Top Artists</span>
        </Link>
        <Link to="/top-charts" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M3 12h18M3 21h18" />
          </svg>
          <span>Top Charts</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;