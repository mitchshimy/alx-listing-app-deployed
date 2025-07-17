// components/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2
        ${
          isActive
            ? "bg-black text-white border border-black"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
        }
      `}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

export default Pill;
