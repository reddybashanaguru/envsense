'use client';

import React from 'react';
import { TrashIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';

interface Props {
  locations: string[];
}

const ExistLocations: React.FC<Props> = ({ locations }) => {
  const [items, setItems] = React.useState(locations);

  const handleRemoveLocation = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  React.useEffect(() => {
    setItems(locations);
  }, [locations]);

  return (
    <div>
      <h1 className="text-blue-500">CITY PHARMACY</h1>
      <div className="p-5 bg-gray-50 rounded-lg shadow-lg">
        <ul>
          {items.map((location, index) => (
            <li key={index} className="mb-3">
              <div className="flex items-center justify-between space-x-3 border border-gray-300 p-3 rounded-md max-w-xs w-auto shadow-sm hover:shadow-md transition-all duration-200 ease-in-out">
              <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
                <span
                  className="text-sm text-gray-700 truncate"
                  aria-label={`Location: ${location}`}
                >
                  {location}
                </span>

                <TrashIcon
                  className="h-5 w-5 text-red-500 cursor-pointer"
                  aria-label="Delete location"
                  onClick={() => handleRemoveLocation(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExistLocations;
