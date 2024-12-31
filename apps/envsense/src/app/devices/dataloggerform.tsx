import React from 'react';

const DataForm: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-1">
          Location <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <input
            type="text"
            className="flex-1 px-3 py-2 mb-4 sm:mb-0 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter location"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            + Add Location
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-1">
          Data Logger Name
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter data logger name"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-1">
          Sample Interval
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter sample interval"
        />
        {/* Blue-colored note below the input */}
        <p className="mt-2 text-blue-500 text-sm">
          {' '}
          Note : The sample rate will be automatically adjusted to a minimum if
          5 minutes for RF loggers, and 1 hour when there is no active
          subscription.Changing the sample rate may clear any unsent readings on
          your data logger. Do not change the sample rate while your data logger
          is catching up.
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-1">
          Temperature
        </label>
        <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
          <option value="">Company default</option>
          <option value="Celsius">Celsius (°C)</option>
          <option value="Fahrenheit">Fahrenheit (°F)</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-1">
          User Calibration Interval
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="User Calibration Interval"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-1">
          Display Time Zone
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Display Time Zone"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <button className="mb-4 sm:mb-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Save
        </button>
        <button className="mb-4 sm:mb-0 px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded-md hover:bg-blue-200 transition">
          Archive this data logger
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-800 transition">
          Delete data logger
        </button>
      </div>
    </div>
  );
};

export default DataForm;
