import React from "react";

export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-neutral rounded-xl p-6 shadow-lg text-center">
      <p className="text-sm uppercase text-gray-600">{title}</p>{" "}
      {/* Changed text color for better contrast */}
      <h2 className="text-2xl font-bold mt-2 text-gray-800">{value}</h2>{" "}
      {/* Changed text color */}
    </div>
  );
}
