'use client';
import React, { useState } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { FiSearch } from 'react-icons/fi';

const cards = [
  {
    title: 'Dew points CH:3 Hot Spot',
    temp: '4.7 C',
    temperatures: [5, 4, 6, 5.5, 4.2],
  },
  {
    title: 'Dew points CH:5 Cold Spot',
    temp: '4.7 C',
    temperatures: [4.5, 4.1, 4.3, 4.0, 4.2],
  },
  {
    title: 'Dew points CH:8 Room A',
    temp: '4.7 C',
    temperatures: [6, 6.2, 5.8, 5.9, 6.0],
  },
  {
    title: 'Dew points CH:2 Freezer',
    temp: '4.7 C',
    temperatures: [6.4, 6.7, 6.3, 6.5, 6.6],
  },
  {
    title: 'Dew points CH:1 Storage Room',
    temp: '4.7 C',
    temperatures: [3.5, 3.8, 3.7, 3.6, 3.9],
  },
  {
    title: 'Dew points CH:6 Warehouse',
    temp: '4.7 C',
    temperatures: [4.2, 4.3, 4.4, 4.5, 4.6],
  },
];

const calculateTemperatures = (temperatures: number[]) => {
  const avg = (
    temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length
  ).toFixed(2);
  const min = Math.min(...temperatures).toFixed(2);
  const max = Math.max(...temperatures).toFixed(2);
  return { avg, min, max };
};

const Channels: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    'Dashbord: DicksonOne Default'
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mt-3 ml-3">
      <div className="flex items-center space-x-4">
        <div className="relative w-full sm:w-5/6 md:w-4/5 lg:w-3/4">
          <input
            type="text"
            id="search"
            placeholder="Search Channels"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <FiSearch className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        </div>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleSelectChange}
          className="w-72 p-2 border rounded-md text-blue-500 text-sm font-bold"
        >
          <option value="With in 24 Hours">With in : 24 Hours</option>
          <option value="With in 6 Hours">With in 6 Hours</option>
          <option value="With in 1 Hour">With in 1 Hour</option>
        </select>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => {
            const { avg, min, max } = calculateTemperatures(card.temperatures);
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 relative"
              >
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-sm text-blue-700 font-bold mb-2 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-center">{card.temp}</p>
                  <div className="flex space-x-4 text-xs text-gray-500 mt-2 justify-center">
                    <div className="flex flex-col items-center">
                      <p>Avg Temp</p>
                      <p>{avg}°C</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>Min Temp</p>
                      <p>{min}°C</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>Max Temp</p>
                      <p>{max}°C</p>
                    </div>
                  </div>
                </div>
                <EllipsisVerticalIcon className="h-5 w-5 text-gray-600 absolute top-4 right-2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Channels;
