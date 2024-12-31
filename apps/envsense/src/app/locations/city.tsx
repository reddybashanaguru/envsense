
'use client'
import React, { useState } from 'react';
import { MapPinIcon, Bars4Icon } from '@heroicons/react/24/solid';

interface Props {
  initialCity: string;
  subcity: string;
  sublocations: string[];
}

const City: React.FC<Props> = ({ initialCity, subcity, sublocations }) => {
  // State to manage the displayed city name
  const [city, setCity] = useState(
    subcity ? `${initialCity} / ${subcity}` : initialCity
  );

  // Function to update city when subcity is clicked
  const handleSubcityClick = () => {
    setCity(subcity);
  };

  return (
    <div className="p-6 space-y-4">
      {/* Display the city (initialCity / subcity if both are present) */}
      <p className="text-xs font-semibold" style={{ fontSize: '0.7rem' }}>
        {subcity ? `${initialCity} / ${subcity}` : initialCity}
      </p>

      <div className="relative">
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-5 w-5 text-gray-600" />
          {/* Clicking on subcity updates the city */}
          <h4
            className="text-lg font-semibold cursor-pointer"
            onClick={handleSubcityClick}
          >
            {subcity || city}
          </h4>
        </div>

        <div className="absolute top-0 right-0 space-x-4 flex">
          <button
            className="px-2 py-1 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition duration-200"
            style={{ fontSize: '0.8rem' }}
          >
            Manage Locations
          </button>
          <button
            className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            style={{ fontSize: '0.8rem' }}
          >
            + Add Hardware
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2 space-y-1">
          <h4 className="font-semibold">
            Sublocations ({sublocations.length})
          </h4>
          <Bars4Icon className="h-4 w-4 text-gray-800" />
        </div>

        <div className="flex flex-wrap space-x-1 overflow-x-auto max-w-full">
          {sublocations.map((sublocation, index) => (
            <p
              key={index}
              className="text-sm text-gray-700 bg-blue-200 p-1 px-3 rounded mt-2"
            >
              {sublocation}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default City;
