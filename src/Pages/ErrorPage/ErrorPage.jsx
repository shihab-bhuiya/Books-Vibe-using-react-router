import React from "react";
import { Link, useRouteError } from "react-router";


const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="text-center max-w-md w-full">

        {/* Big Code */}
        <h1 className="text-8xl font-extrabold text-red-500 mb-4">
          {error?.status || "404"}
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Something went wrong
        </h2>

        {/* Message */}
        <p className="text-gray-400 mb-6">
          {error?.statusText || "The page you’re looking for doesn’t exist or an error occurred."}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/">
            <button className="px-6 py-2 rounded-2xl bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-2xl border border-gray-600 hover:bg-gray-700 transition-all duration-300"
          >
            Reload
          </button>
        </div>

        {/* Extra small hint */}
        <p className="text-xs text-gray-500 mt-6">
          Error ID: {error?.status || "UNKNOWN"}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;