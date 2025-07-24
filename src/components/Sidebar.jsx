// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

export default function Sidebar() {
  const location = useLocation(); // Get current location

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6"> {/* Darker background and increased padding */}
      <h2 className="text-2xl font-bold mb-8">AnalyticsApp</h2> {/* Increased bottom margin */}
      <nav>
        <ul>
          <li className="mb-4">
            {/* Add active link styling */}
            <Link
              to="/"
              className={`block py-2 px-4 rounded transition duration-200 ease-in-out ${
                location.pathname === '/' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Home
            </Link>
          </li>
          <li className="mb-4">
            {/* Add active link styling */}
            <Link
              to="/dashboard"
              className={`block py-2 px-4 rounded transition duration-200 ease-in-out ${
                location.pathname === '/dashboard' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            {/* Add active link styling */}
            <Link
              to="/reports"
              className={`block py-2 px-4 rounded transition duration-200 ease-in-out ${
                location.pathname === '/reports' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Reports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
