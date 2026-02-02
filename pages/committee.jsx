import { Outlet, Link } from "react-router-dom";

export default function Committee() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-slate-700 mb-8">
          Committee
          <div className="w-24 h-1 bg-blue-900 mt-3 rounded-full"></div>
        </h1>

        <div className="flex gap-6 mb-10">
          <Link
            to="/committee/advisory"
            className="px-4 py-2 rounded-lg font-medium bg-blue-900 text-white"
          >
            Advisory Board
          </Link>

          <Link
            to="/committee/organizing"
            className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Organizing Committee
          </Link>
        </div>

        {/* Nested route renders here */}
        <Outlet />
      </div>
    </div>
  );
}
