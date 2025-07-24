// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger icon for smaller screens */}
      <button className="md:hidden p-4 focus:outline-none" onClick={toggleSidebar}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div className={
        `w-64 bg-gray-900 text-white min-h-screen p-6 absolute md:relative inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`
      }>
        <h2 className="text-2xl font-bold mb-8">AnalyticsApp</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                to="/"
                className={`block py-2 px-4 rounded transition duration-200 ease-in-out ${
                  location.pathname === '/' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false) // Close sidebar on link click
              }>
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/dashboard"
                className={`block py-2 px-4 rounded transition duration-200 ease-in-out ${
                  location.pathname === '/dashboard' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false) // Close sidebar on link click
              }>
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/reports"
                className={`block py-2 px-4 rounded transition duration-200 ease-in-out ${
                  location.pathname === '/reports' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false) // Close sidebar on link click
              }>
                Reports
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
