"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
        © {new Date().getFullYear()} StayFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
