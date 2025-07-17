"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">StayFinder</div>

        {/* Search Bar */}
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search accommodations..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Nav Links & Auth Buttons */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-4 text-sm font-medium">
            <a href="#" className="hover:text-blue-600">
              Rooms
            </a>
            <a href="#" className="hover:text-blue-600">
              Mansion
            </a>
            <a href="#" className="hover:text-blue-600">
              Countryside
            </a>
            <a href="#" className="hover:text-blue-600">
              Beachfront
            </a>
          </nav>
          <button className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
