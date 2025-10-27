import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="text-center">
        {/* Simple SVG */}
        <svg
          className="w-24 h-24 mx-auto mb-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Coming Soon</h1>
        <p className="text-gray-600">We're working on something amazing!</p>
      </div>
    </div>
  );
};

export default ComingSoon;
