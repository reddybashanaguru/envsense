import React from 'react';

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

const PointsTable: React.FC<ChannelCardProp> = ({
  title,
  data,
}) => {
  return (
    <div className="p-2">
      <p className="text-m font-semibold ">{title}</p>

      <div className="overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
        </div>

        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                Data Logger Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                Channel Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                Recent Reading
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                Recent Min/Max
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">
                24hr Trend
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium ">
                <div className="flex space-x-2">
                  <button className="text-sm text-blue-500 hover:underline">Hide Time Stamps</button>
                  <button className="text-sm text-blue-500 hover:underline">Hide Archived Devices</button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-2 text-sm">{item.dataLoggerName}</td>
                <td className="px-4 py-2 text-sm">{item.channelName}</td>
                <td className="px-4 py-2 text-sm">{item.recentReading}</td>
                <td className="px-4 py-2 text-sm">{item.recentMinMax}</td>
                <td className="px-4 py-2 text-sm">{item.trend24hr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
