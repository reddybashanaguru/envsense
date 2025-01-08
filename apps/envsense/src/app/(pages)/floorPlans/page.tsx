import React from 'react';

const FloorPlan: React.FC = () => {
  return (
    <div className="w-full px-4 mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Monitoring Floor Plans</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          + Add Floor Plan
        </button>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4 mt-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">
            No Floor Plan Yet
          </h1>
          <h4 className="mt-2 text-gray-500">
            Upload a Floor Plan and Place assets on the map to start monitoring
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
