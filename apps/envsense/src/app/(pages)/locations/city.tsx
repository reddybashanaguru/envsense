'use client';
import React, { useState } from 'react';
import { MapPinIcon, Bars4Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';

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
    <div className="p-6 space-y-6 bg-white rounded-lg shadow-md m-4">
      {/* Display the city (initialCity / subcity if both are present) */}
      <p className="text-xs font-semibold text-gray-500">
        {subcity ? `${initialCity} / ${subcity}` : initialCity}
      </p>

      <div className="relative">
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-5 w-5 text-gray-600" />
          {/* Clicking on subcity updates the city */}
          <h4
            className="text-lg font-semibold cursor-pointer text-gray-800 hover:text-blue-500 transition duration-200"
            onClick={handleSubcityClick}
          >
            {subcity || city}
          </h4>
        </div>

        <div className="absolute top-0 right-0 flex space-x-4">
          <button
            className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            Manage Locations
          </button>
          <Link href={'/registerHardware'}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            + Add Hardware
          </Link>
        </div>
      </div>

      {/* Sublocations */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <h4 className="font-semibold text-gray-800">
            Sublocations ({sublocations.length})
          </h4>
          <Bars4Icon className="h-4 w-4 text-gray-600" />
        </div>

        <div className="flex flex-wrap space-x-2 overflow-x-auto">
          {sublocations.map((sublocation, index) => (
            <Link
              key={index}
              href={'/locations/edit/{}'}
              className="text-sm text-gray-700 bg-blue-200 p-2 px-4 rounded-full mt-2 hover:bg-blue-300 transition duration-150 ease-in-out"
            >
              {sublocation}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default City;
