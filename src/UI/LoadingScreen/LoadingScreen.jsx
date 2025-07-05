import React from 'react';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#B6B09F] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">BABAKAZO</h1>
          <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
        </div>
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;