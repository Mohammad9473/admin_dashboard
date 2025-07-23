
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white p-6">
        <nav className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">📈 AnalyticsApp</h1>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/reports">Reports</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}
