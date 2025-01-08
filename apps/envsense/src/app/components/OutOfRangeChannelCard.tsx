'use client'; // Mark this file as a client-side component

import React from 'react';
import Link from 'next/link';

interface ChannelData {
  timeoutRange: string;
  channelName: string;
  dataLoggerName: string;
  location: string;
}

interface ChannelCardProp {
  title: string;
  data: ChannelData[]; // Array of objects containing channel data
  backgroundColor?: string;
}

const OutOfRangeChannelCard: React.FC<ChannelCardProp> = ({
  title,
  data,
  backgroundColor = 'bg-white',
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${backgroundColor}`}>
      <p className="text-m font-semibold mb-4 text-center">{title}</p>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Time out of range
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Channel Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Data Logger Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-2 text-sm">{item.timeoutRange}</td>
                <td className="px-4 py-2 text-sm text-blue-500 hover:underline">
                  <Link href="#">{item.channelName}</Link>
                </td>
                <td className="px-4 py-2 text-sm">{item.dataLoggerName}</td>
                <td className="px-4 py-2 text-sm">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutOfRangeChannelCard;
