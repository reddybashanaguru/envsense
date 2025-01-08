import React from 'react';
import { TrashIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';

interface Props {
  locations: string[];
}

const ExistLocations: React.FC<Props> = ({ locations }) => {
  return (
    <div>
      <h1 className="text-blue-500">CITY PHARMACY</h1>

      <div className="p-5   bg-gray-50 rounded-lg shadow-lg">
      <ul>
      {locations.map((location, index) => (
        <li key={index} className="mb-3">
          <div className="flex items-center justify-between space-x-3">
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
            
            <span className="flex-grow text-sm text-gray-700">{location}</span>
            
            <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer" />
          </div>
        </li>
      ))}
    </ul>
      </div>
    </div>
  );
};

export default ExistLocations;
