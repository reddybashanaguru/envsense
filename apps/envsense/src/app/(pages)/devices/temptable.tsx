'use client';
import React, { useState } from 'react';

interface CardProps {
  avgTemp: number;
  minTemp: number;
  maxTemp: number;
  meanKineticTemp: number;
}

const TemperatureTable: React.FC<CardProps> = ({
  avgTemp,
  minTemp,
  maxTemp,
  meanKineticTemp,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleChange = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className=" mx-auto w-full max-w-5xl">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="border-t border-gray-300 pt-4">
          <div className="grid grid-cols-6 gap-4 text-center">
            <div className="font-bold text-gray-600">Show/Hide</div>
            <div className="font-bold text-gray-600">Channel Name</div>
            <div className="font-bold text-gray-600">Avg</div>
            <div className="font-bold text-gray-600">Min</div>
            <div className="font-bold text-gray-600">Max</div>
            <div className="font-bold text-gray-600">Mean Kinetic Temp</div>

            <div className="text-gray-700">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isVisible}
                  onChange={handleToggleChange}
                  className="toggle-checkbox appearance-none h-6 w-11 border-2 border-gray-300 rounded-full bg-gray-200 checked:bg-blue-500 focus:outline-none"
                />
              </label>
            </div>
            <div className="text-gray-700">Temperature Channel</div>
            <div className="text-gray-700">{avgTemp.toFixed(2)} °C</div>
            <div className="text-gray-700">{minTemp} °C</div>
            <div className="text-gray-700">{maxTemp} °C</div>
            <div className="text-gray-700">{meanKineticTemp.toFixed(2)} °C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureTable;
