'use client';
import React, { useState } from 'react';
import General from './general';
import DefaultDataLogger from './defaultdatalogger';
import SecuritySettings from './securitysettings';
import SSOConfig from './ssoconfig';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('General');

  return (
    <div className="bg-gray-50 min-h-auto p-8">
      <h1 className="text-2xl font-bold mb-4">CITY PHARMACY</h1>
      <h2 className="text-xl font-semibold mb-6">Settings</h2>

      <div className=" mb-6">
        <nav className="flex space-x-6">
          <button
            className={`pb-2 ${
              activeTab === 'General'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('General')}
          >
            General
          </button>
          <button
            className={`pb-2 ${
              activeTab === 'DefaultDataLoggerSettings'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('DefaultDataLoggerSettings')}
          >
            Default Data Logger Settings
          </button>
          <button
            className={`pb-2 ${
              activeTab === 'SecuritySettings'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('SecuritySettings')}
          >
            Security Settings
          </button>
          <button
            className={`pb-2 ${
              activeTab === 'SSOConfig'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('SSOConfig')}
          >
            SSO Config
          </button>
        </nav>
      </div>

      <div className="tab-content">
        {activeTab === 'General' && <General />}
        {activeTab === 'DefaultDataLoggerSettings' && <DefaultDataLogger />}
        {activeTab === 'SecuritySettings' && <SecuritySettings />}
        {activeTab === 'SSOConfig' && <SSOConfig />}
      </div>
    </div>
  );
};

export default Settings;
