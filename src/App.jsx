// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar"; // Import Sidebar component

export default function App() {
  return (
    <Router>
      <div className="flex"> {/* Use flexbox for layout */}
        <Sidebar /> {/* Include the Sidebar */}
        <div className="flex-1 min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white p-6"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
