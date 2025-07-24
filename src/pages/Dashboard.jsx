import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // Import Animation
import React from "react";
import SummaryCard from "../components/SummaryCard";

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const lineData = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 1398 },
  { name: "Mar", value: 9800 },
  { name: "Apr", value: 3908 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">📊 Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SummaryCard title="Users" value="1,245" />
        <SummaryCard title="Sales" value="$23,990" />
        <SummaryCard title="Growth" value="12%" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-neutral p-6 rounded-xl shadow-lg">
          <h3 className="text-lg mb-4 font-semibold text-gray-800">
            Monthly Trend
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {/* Add animation to Line component */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-neutral p-6 rounded-xl shadow-lg">
          <h3 className="text-lg mb-4 font-semibold text-gray-800">
            Market Share
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              {/* Add animation to Pie component */}
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={80}
                fill="#8884d8"
                label
                isAnimationActive={true}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={["#3b82f6", "#10b981", "#60a5fa"][index % 3]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
