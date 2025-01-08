'use client';
import React, { useState } from 'react';
import PointsTable from './pointstable';
import FloorPlan from './floorplan';

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

const Monitor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Floor Plan'>('Overview');

  // Helper function to generate tab classnames
  const getTabButtonClass = (tab: 'Overview' | 'Floor Plan') =>
    `text-sm font-medium py-2 px-6 rounded-lg transition-all duration-200 ${
      activeTab === tab
        ? 'bg-blue-500 text-white shadow-lg'
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <div className="ml-4 mt-4 bg-white rounded-lg shadow-md max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Tab Navigation */}
      <nav className="flex space-x-6 mt-8 mb-6 border-b border-gray-200 pb-2">
        <button
          className={getTabButtonClass('Overview')}
          onClick={() => setActiveTab('Overview')}
        >
          Overview
        </button>
        <button
          className={getTabButtonClass('Floor Plan')}
          onClick={() => setActiveTab('Floor Plan')}
        >
          Floor Plan
        </button>
      </nav>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'Overview' ? (
          <PointsTable title="Monitoring Points" data={dummyData} />
        ) : (
          <FloorPlan />
        )}
      </div>
    </div>
  );
};

export default Monitor;
