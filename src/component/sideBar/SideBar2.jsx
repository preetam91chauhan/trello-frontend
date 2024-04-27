import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-64 bg-white text-black">
      {/* Sidebar header */}
      <div className="p-4 flex items-center justify-between">
        <div className="text-lg font-semibold">Dashboard</div>
        {/* Toggle button */}
        {/* You can replace this button with an icon or image for toggling */}
        <button className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Sidebar content */}
      {/* Add links and other content here */}
      <ul>
        <li className="p-4">Dashboard</li>
        <li className="p-4">Users</li>
        <li className="p-4">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
