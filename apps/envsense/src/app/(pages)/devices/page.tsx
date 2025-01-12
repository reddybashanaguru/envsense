import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';

const cards = [
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
  {
    title: 'Data Loggers #os (04) - New cold Room ',
    content: 'City Pharmacy Sharjah',
  },
];

const DataLoggers: React.FC = () => {
  return (
    <div className="mt-3 ml-3">
      <div className="flex items-center space-x-4">
        <div className="relative w-full sm:w-5/6 md:w-4/5 lg:w-3/4">
          <input
            type="text"
            id="search"
            placeholder="Search Data Loggers ..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <FiSearch className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        </div>
        <Link href={'/registerHardware'} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
          + Add Hardware
        </Link>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-sm text-blue-700 font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.content}</p>
              </div>
              <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataLoggers;
