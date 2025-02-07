import React from 'react';
import { FaFilter } from 'react-icons/fa'; 

interface DataLoggerProps {
  tableData?: {
    dataLogger: string;
    location: string;
    sampleInterval: string;
    tempUnit: string;
  }[];
}

const DataLogger: React.FC<DataLoggerProps> = ({ tableData = [] }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Modify</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg border border-gray-300 text-sm">
          <thead>
            <tr className="border-b bg-gray-200 text-blue-400">
              <th className="p-4 text-left">
                <div className="flex items-center">
                  <input type="checkbox" disabled className="mr-2" />
                  Data Logger Name{' '}
                  <FaFilter className="h-5 w-5 ml-2 cursor-pointer" />
                </div>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center">
                  Location <FaFilter className="h-5 w-5 ml-2 cursor-pointer" />
                </div>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center">
                  Sample Interval{' '}
                  <FaFilter className="h-5 w-5 ml-2 cursor-pointer" />
                </div>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center">
                  Temp Unit <FaFilter className="h-5 w-5 ml-2 cursor-pointer" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((row, index) => (
                <tr key={index} className="border-b cursor-pointer">
                  <td className="p-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {row.dataLogger}
                    </div>
                  </td>
                  <td className="p-4">{row.location}</td>
                  <td className="p-4">{row.sampleInterval}</td>
                  <td className="p-4">
                    {row.tempUnit === 'Celsius' ? '°C' : '°F'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataLogger;
