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
      </div>
    </div>
  );
};

export default Monitor;
