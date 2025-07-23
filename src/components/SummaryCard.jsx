
import React from "react";

export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white/10 rounded-xl p-6 shadow-md text-center backdrop-blur-lg shadow-glow">
      <p className="text-sm uppercase text-gray-300">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}
