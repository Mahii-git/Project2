// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-4 bg-white">
      <h1 className="text-2xl font-bold">Uber Eats</h1>
      <div className="space-x-2">
        <button className="px-4 py-2 bg-gray-50 text-black rounded-full">Register</button>
        <button className="px-4 py-2 bg-black text-white rounded-full">Register</button>
      </div>
    </div>
    </header>
  );
};

export default Header;

