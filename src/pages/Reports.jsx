
import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', uv: 4000, pv: 2400 },
  { name: 'Week 2', uv: 3000, pv: 1398 },
  { name: 'Week 3', uv: 2000, pv: 9800 },
  { name: 'Week 4', uv: 2780, pv: 3908 },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">📈 Reports</h2>
      <div className="bg-white/10 p-4 rounded-xl shadow">
        <h3 className="text-lg mb-2 font-semibold">Weekly Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" fill="#34d399" />
            <Bar dataKey="uv" fill="#a78bfa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
