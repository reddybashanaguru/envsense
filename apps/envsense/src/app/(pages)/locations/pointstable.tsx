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
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <p className="text-xl font-semibold text-gray-800 mb-4">{title}</p>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">Data Logger Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">Channel Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">Recent Reading</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">Recent Min/Max</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100">24hr Trend</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`text-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b-2 border-gray-300 hover:bg-gray-100 transition-all`}
              >
                <td className="px-6 py-3">{item.dataLoggerName}</td>
                <td className="px-6 py-3">{item.channelName}</td>
                <td className="px-6 py-3">{item.recentReading}</td>
                <td className="px-6 py-3">{item.recentMinMax}</td>
                <td className="px-6 py-3">{item.trend24hr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
