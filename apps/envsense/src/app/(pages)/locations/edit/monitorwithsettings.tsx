'use client';
import React, { useState } from 'react';
import PointsTable from '../pointstable';
import FloorPlan from '../floorplan';

const dummyData = [
  {
    dataLoggerName: 'Logger 1',
    channelName: 'Channel A',
    recentReading: '25°C',
    recentMinMax: 30,
    trend24hr: 1,
    location: 'New York',
  },
  {
    dataLoggerName: 'Logger 1',
    channelName: 'Channel A',
    recentReading: '25°C',
    recentMinMax: 30,
    trend24hr: 1,
    location: 'New York',
  },
  {
    dataLoggerName: 'Logger 2',
    channelName: 'Channel B',
    recentReading: '20°C',
    recentMinMax: 25,
    trend24hr: -2,
    location: 'Los Angeles',
  },
  {
    dataLoggerName: 'Logger 3',
    channelName: 'Channel C',
    recentReading: '15°C',
    recentMinMax: 20,
    trend24hr: 3,
    location: 'Chicago',
  },
];

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="ml-3">
      <div className="flex space-x-4 mt-8">
        <button
          className={`text-sm font-bold text-blue-500 ${
            activeTab === 'Overview' ? 'underline' : ''
          }`}
          onClick={() => setActiveTab('Overview')}
        >
          Overview
        </button>
        <button
          className={`text-sm font-bold text-blue-500 ${
            activeTab === 'Floor Plan' ? 'underline' : ''
          }`}
          onClick={() => setActiveTab('Floor Plan')}
        >
          Floor Plan
        </button>
        <button
          className={`text-sm font-bold text-blue-500 ${
            activeTab === 'Settings' ? 'underline' : ''
          }`}
          onClick={() => setActiveTab('Settings')}
        >
          Settings
        </button>
      </div>

      <div className="mt-2">
        {activeTab === 'Overview' && (
          <PointsTable title="Monitoring Points" data={dummyData} />
        )}
        {activeTab === 'Floor Plan' && (
          <div>
            <FloorPlan />
          </div>
        )}
        {activeTab === 'Settings' && (
          <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center ">
            <div className="  p-4 space-y-6">
              <h3 className="text-lg font-bold">Location Information</h3>
              <p className="text-sm text-gray-600 max-w-md">
                Simplify your account permissions. Users can be granted
                read-only or managerial access to a locations data loggers.
              </p>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Location Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Location Name"
                  className=" w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Parent Location
                </label>
                <input
                  type="text"
                  required
                  placeholder="Parent Location"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                  Save Changes
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
                  Delete
                </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
