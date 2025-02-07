'use client';
import React, { useState } from 'react';
import DataForm from './newlocation';

const tabContent = {
  datalogger: (
    <div>
      <DataForm />
    </div>
  ),
  firmware: (
    <div>
      <h3 className="text-lg font-bold text-blue-700 mb-2">Firmware</h3>
      <p>Information related to Firmware will appear here.</p>
    </div>
  ),
  sensors: (
    <div>
      <h3 className="text-lg font-bold text-blue-700 mb-2">Sensors</h3>
      <p>Information related to Sensors will appear here.</p>
    </div>
  ),
  network: (
    <div>
      <h3 className="text-lg font-bold text-blue-700 mb-2">Network</h3>
      <p>Information related to Network will appear here.</p>
    </div>
  ),
};

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'datalogger' | 'firmware' | 'sensors' | 'network'>('datalogger');

  return (
    <div className="mt-5">
      <div className="flex space-x-4 border-b border-gray-300">
        <button
          onClick={() => setActiveTab('datalogger')}
          className={`py-2 px-4 font-semibold text-sm ${
            activeTab === 'datalogger' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
          Data Loggers
        </button>
        <button
          onClick={() => setActiveTab('firmware')}
          className={`py-2 px-4 font-semibold text-sm ${
            activeTab === 'firmware' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
          Firmware
        </button>
        <button
          onClick={() => setActiveTab('sensors')}
          className={`py-2 px-4 font-semibold text-sm ${
            activeTab === 'sensors' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
          Sensors
        </button>
        <button
          onClick={() => setActiveTab('network')}
          className={`py-2 px-4 font-semibold text-sm ${
            activeTab === 'network' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
          Network
        </button>
      </div>

      <div className="mt-6">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Settings;
