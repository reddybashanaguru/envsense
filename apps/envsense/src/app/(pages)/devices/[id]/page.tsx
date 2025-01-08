'use client';
import React, { useState } from 'react';
import LineChart from '../linegraph';
import Settings from '../setting';

interface DataChartProps {
  title: string;
  subtitle: string;
}

const DataChart: React.FC<DataChartProps> = ({ title, subtitle }) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-3 ml-3">
      <div>
        <h3 className="text-sm font-medium text-blue-600 text-left">
          CITY PHARMACY / CITY PHARMACY SHARJAH /CR LOGGER #05 HOT(4) - NEW COLD
          ROOM
        </h3>
        <h1 className="text-2xl font-bold text-gray-800 mt-2 text-left">
          CR LOGGER #05 HOT(04) - NEW COLD ROOM
        </h1>
      </div>

      <div className="mt-10">
        <ul className="flex space-x-8 ">
          <li
            className={`cursor-pointer pb-2 ${
              activeTab === 'Overview' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Overview')}
          >
            Overview
          </li>
          <li
            className={`cursor-pointer pb-2 ${
              activeTab === 'Alarm' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Alarm')}
          >
            Alarm
          </li>
          <li
            className={`cursor-pointer pb-2 ${
              activeTab === 'Settings' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Settings')}
          >
            Settings
          </li>
        </ul>
      </div>

      <div className="mt-3">
        {activeTab === 'Overview' && (
          <div className="w-full max-w-full lg:max-w-4xl mx-auto">
            <div style={{ position: 'relative', height: '400px' }}>
              <LineChart />
            </div>
          </div>
        )}
        {activeTab === 'Alarm' && <div>Alarm content goes here...</div>}
        {activeTab === 'Settings' && <div><Settings /></div>}
      </div>
    </div>
  );
};

export default DataChart;
