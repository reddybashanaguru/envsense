'use client';

import React, { useState } from 'react';
import General from './general';
import EmailPreference from './emailpreference';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div>
      <h1 className="text-xl font-bold m-3">Edit User or Contact</h1>

      <div className="border-b border-gray-300 mb-6">
        <nav className="flex space-x-4">
          <button
            className={`px-4 py-2 ${
              activeTab === 'general'
                ? 'text-blue-500 border-b-2 border-blue-500 font-semibold'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'emailPreferences'
                ? 'text-blue-500 border-b-2 border-blue-500 font-semibold'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('emailPreferences')}
          >
            Email Preferences
          </button>
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'general' && <General />}

        {activeTab === 'emailPreferences' && <EmailPreference />}
      </div>
    </div>
  );
};

export default Profile;
