import React from "react";

const General: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 min-h-screen mx-auto">
      <h3 className="text-lg font-semibold mb-6 text-gray-800">General Settings</h3>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Datetime Format</label>
        <input
          type="datetime-local"
          className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Decimal Separator</label>
        <select className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Period (.)</option>
        </select>
      </div>

      <p className="text-blue-400 mb-6">Reseller account: Abdulla Haider BM LLC</p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
        Save
      </button>
    </div>
  );
};

export default General;
