import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col p-4">
      <div className="flex items-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19V6l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
        <h1 className="text-2xl font-bold">Music Boost</h1>
      </div>
      <nav className="flex flex-col space-y-4">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Discover</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Around You</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Top Artists</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Top Charts</a>
      </nav>
    </div>
  );
};

export default Sidebar;
