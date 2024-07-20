import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">Music Boost</h1>
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
