'use client';
import React, { useState } from 'react';

const MonitoringPoints: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const monitoringPoints = [
    'City Pharmacy Sharjah',
    'City Pharmacy Jafza',
    'City Pharmacy Dubai',
    'City Pharmacy Jafza',
    'City Pharmacy Dubai',
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = monitoringPoints.filter((point) =>
        point.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Choose the monitoring points to be included in your report
        </label>
        <input
          type="search"
          placeholder="Search monitoring points..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {filteredOptions.length > 0 && (
          <ul className="border border-gray-300 rounded-lg mt-2 max-h-40 overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-all"
                onClick={() => {
                  setSearchTerm(option); 
                  setFilteredOptions([]); 
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-center sm:justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
          Save and continue
        </button>
      </div>
    </div>
  );
};

export default MonitoringPoints;
