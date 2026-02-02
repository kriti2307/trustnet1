import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Committee() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-slate-700 mb-6">
          Committee
          <div className="w-24 h-1 bg-trustnet-primary mt-3 rounded-full"></div>
        </h1>

        {/* Navigation */}
        <div className="flex gap-4 mb-10">
          <Link
            to="/committee/advisory"
            className="px-4 py-2 rounded bg-blue-900 text-white"
          >
            Advisory Board
          </Link>

          <Link
            to="/committee/organizing"
            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Organizing Committee
          </Link>
        </div>

        {/* Child pages render here */}
        <Outlet />
      </div>
    </div>
  );
}
