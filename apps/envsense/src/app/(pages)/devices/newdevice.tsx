import React from 'react';

const NewDevice: React.FC = () => {
  return (
    <div className="relative p-6 bg-white shadow-md rounded-lg min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Device</h1>

      <button className="absolute top-6 right-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        + Add New Device
      </button>

      <div className="mb-4 flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 text-gray-700 text-sm font-bold mr-2">Select Site</label>
        <select className="w-full sm:w-2/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>
            Select a site
          </option>
          <option value="site1">Site 1</option>
          <option value="site2">Site 2</option>
          <option value="site3">Site 3</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row items-center">
        <label className="w-full sm:w-1/3 text-gray-700 text-sm font-bold mr-2">Select Location</label>
        <select className="w-full sm:w-2/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>
            Select a location
          </option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Device Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter device name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Recording Interval</label>
        <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>
            Recording Interval
          </option>
          <option value="interval1">Interval 1</option>
          <option value="interval2">Interval 2</option>
          <option value="interval3">Interval 3</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Alert Limit</label>
        <div className="flex space-x-4">
          <input type="radio" name="alertLimit" className="mr-2" /> Min
          <input type="radio" name="alertLimit" className="mr-2" /> Max
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Action Limit</label>
        <div className="flex space-x-4">
          <input type="radio" name="actionLimit" className="mr-2" /> Min
          <input type="radio" name="actionLimit" className="mr-2" /> Max
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Alarm Notification</label>
        <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>
            Select Alarm Notification
          </option>
          <option value="alarm1">Alarm 1</option>
          <option value="alarm2">Alarm 2</option>
          <option value="alarm3">Alarm 3</option>
        </select>
      </div>

      <div className="absolute bottom-6 right-6 flex space-x-4">
        <button className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          + Add More User
        </button>
        <button className="bg-yellow-300 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          + Add More Device
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default NewDevice;