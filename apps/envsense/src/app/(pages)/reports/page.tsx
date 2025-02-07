import React from 'react';
import ReportType from './reporttype';
import MonitoringPoints from './monitoringpoints';
import Link from 'next/link';

const NewReport: React.FC = () => {
  return (
    <div className="relative p-6 bg-white shadow-md rounded-lg min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">New Report</h1>

      <Link href= {'reports/newreport'}className="absolute top-6 right-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        + Generate New Report
      </Link>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">Filter By</h2>

      <div className="flex flex-col sm:flex-row mb-6 gap-4">
        <select className="w-full sm:w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option className="text-gray-700" value="deviceName">
            Device Name
          </option>
          <option className="text-gray-700" value="device1">
            Device 1
          </option>
          <option className="text-gray-700" value="device2">
            Device 2
          </option>
        </select>
        <select className="w-full sm:w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option className="text-gray-700" value="reportName">
            Report Name
          </option>
          <option className="text-gray-700" value="report1">
            Report A
          </option>
          <option className="text-gray-700" value="report2">
            Report B
          </option>
        </select>
        <button className=" bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">All</h2>

      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Device Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Report Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Downloaded Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Downloaded By
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Report Type
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Downloaded Again
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 border-b">Device 1</td>
            <td className="px-4 py-2 border-b">Report A</td>
            <td className="px-4 py-2 border-b">2025-01-08</td>
            <td className="px-4 py-2 border-b">User 1</td>
            <td className="px-4 py-2 border-b">PDF</td>
            <td className="px-4 py-2 border-b">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewReport;
