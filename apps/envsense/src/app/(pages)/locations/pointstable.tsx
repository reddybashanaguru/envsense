import React from 'react';
import Link from 'next/link';

interface ChannelData {
  dataLoggerName: string;
  channelName: string;
  recentReading: string;
  recentMinMax: number;
  trend24hr: number;
}

interface ChannelCardProp {
  title: string;
  data: ChannelData[];
  backgroundColor?: string;
}

const PointsTable: React.FC<ChannelCardProp> = ({ title, data }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <p className="text-xl font-semibold text-gray-800 mb-4">{title}</p>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">
                Data Logger Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">
                Channel Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">
                Recent Reading
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">
                Recent Min/Max
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">
                24hr Trend
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`text-sm ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } border-b-2 border-gray-300 hover:bg-gray-100 transition-all`}
              >
                <td className="px-6 py-3">
                  <Link href={`/locations/datawithgraph`}>
                    {item.dataLoggerName}
                  </Link>
                </td>
                <td className="px-6 py-3">
                  <Link href={`/locations/datawithgraph`}>
                    {item.channelName}
                  </Link>
                </td>
                <td className="px-6 py-3">
                  <Link href={`/locations/datawithgraph`}>
                    {item.recentReading}
                  </Link>
                </td>
                <td className="px-6 py-3">
                  <Link href={`/locations/datawithgraph`}>
                    {item.recentMinMax}
                  </Link>
                </td>
                <td className="px-6 py-3">
                  <Link href={`/locations/datawithgraph`}>
                    {item.trend24hr}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
