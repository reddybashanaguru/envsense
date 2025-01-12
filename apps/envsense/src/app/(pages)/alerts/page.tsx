import React from "react";
import {
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

const Alerts: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">Alerts Type</h1>
          <select className="border p-2 rounded" defaultValue="All">
            <option value="All">All</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="bg-red-500 p-4 rounded shadow-md w-32 text-center h-20 flex flex-col justify-center cursor-pointer">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs text-white">Active Actions</p>
              <p className="h-5 w-5 text-white">
                <ExclamationCircleIcon />
              </p>
            </div>
            <p className="text-lg text-white font-semibold mt-1">20</p>
          </div>

          <div className="bg-yellow-500 p-4 rounded shadow-md w-32 text-center h-20 flex flex-col justify-center cursor-pointer">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs text-white font-semibold">Active Alerts</p>
              <p className="h-5 w-5 text-white">
                <ExclamationTriangleIcon />
              </p>
            </div>
            <p className="text-lg text-white mt-1">10</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto">
          <thead className="text-blue-400 text-sm">
            <tr className="text-left">
              <th className="p-3">
                <input type="checkbox" disabled />
              </th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Condition</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Equipment</th>
              <th className="p-3">Logger</th>
              <th className="p-3">Recent Reading</th>
              <th className="p-3">Triggered</th>
              <th className="p-3">Acknowledge</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 cursor-pointer transition-colors duration-200 text-xs font-semibold">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="p-3">Excursion</td>
              <td className="p-3">Resolved & Not Acknowledged</td>
              <td className="p-3">Data Logger Not Reporting</td>
              <td className="p-3">5 mins</td>
              <td className="p-3">-</td>
              <td className="p-3">TWP-23-RECEIVING NEW SHJ(HOT SPOT)</td>
              <td className="p-3">-</td>
              <td className="p-3">10 mins ago</td>
              <td className="p-3">Acknowledged</td>
            </tr>
            <tr className="hover:bg-gray-100 cursor-pointer transition-colors duration-200 text-xs font-semibold">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="p-3">Excursion</td>
              <td className="p-3">Resolved & Not Acknowledged</td>
              <td className="p-3">Data Logger Not Reporting</td>
              <td className="p-3">5 mins</td>
              <td className="p-3">-</td>
              <td className="p-3">TWP-23-RECEIVING NEW SHJ(HOT SPOT)</td>
              <td className="p-3">-</td>
              <td className="p-3">10 mins ago</td>
              <td className="p-3">Acknowledged</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alerts;