import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-20 space-y-4">
      <h2 className="text-4xl font-bold mb-4">Welcome to AnalyticsApp</h2>
      <p className="text-lg">Choose a section:</p>
      <div className="space-x-4">
        <Link
          to="/dashboard"
          className="bg-blue-600 px-4 py-2 rounded shadow-md hover:bg-blue-700 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/reports"
          className="bg-blue-500 px-4 py-2 rounded shadow-md hover:bg-blue-600 transition"
        >
          Reports
        </Link>
      </div>
    </div>
  );
}
