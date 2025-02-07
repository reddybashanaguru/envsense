'use client';
import React, { useState } from 'react';

const AuditTrail: React.FC = () => {
  const [auditData, setAuditData] = useState([
    {
      id: 1,
      date: '12-01-2025',
      dataLogger: 'TWP-35-3rd FLOOR SHELVING AREA (COLD POINT) - 16452847',
      user: '<System>',
      eventType: 'Alarm resolved',
      timestamp: '2025-01-01T08:00',
    },
    {
      id: 2,
      date: '12-01-2025',
      dataLogger: 'TWP-35-3rd FLOOR SHELVING AREA (COLD POINT) - 16452847',
      user: '<System>',
      eventType: 'Alarm Triggered',
      timestamp: '2025-01-01T09:00',
    },
  ]);

  return (
    <div className="w-full min-h-screen p-6 bg-white shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Audit Trail</h1>
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>(GMT+4:00) Abu Dhabi</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Data Loggers
          </label>
          <input
            type="text"
            placeholder="Data loggers"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Users</label>
          <input
            type="text"
            placeholder="Users"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Locations
          </label>
          <input
            type="text"
            placeholder="Locations"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Event Types
          </label>
          <input
            type="text"
            placeholder="Event Types"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Date Range Start
          </label>
          <input
            type="datetime-local"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Date Range End
          </label>
          <input
            type="datetime-local"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
          Filter
        </button>
        <button className="text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-200 transition-all">
          Clear Filter
        </button>
      </div>

      <div className="mt-6 overflow-x-auto bg-white shadow-sm rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                Data Logger
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                User
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                Event Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody>
            {auditData.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-xs text-gray-800 border-b">
                  {entry.date}
                </td>
                <td className="px-6 py-4 text-xs text-gray-800 border-b">
                  {entry.dataLogger}
                </td>
                <td className="px-6 py-4 text-xs text-gray-800 border-b">
                  {entry.user}
                </td>

                <td className="px-6 py-4 text-xs text-gray-800 border-b">
                  {entry.eventType}
                </td>
                <td className="px-6 py-4 text-xs text-gray-800 border-b">
                  {entry.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditTrail;
