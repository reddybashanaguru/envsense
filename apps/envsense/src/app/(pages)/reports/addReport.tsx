import React from "react";
import Stepper from "./stepper";
import { TrashIcon } from "@heroicons/react/24/solid";

const AddReport: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        <Stepper />

        <h1 className="text-2xl font-bold mb-6 text-center">Build Report</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-blue-400 mb-2">
              Name of the Report
            </label>
            <input
              name="Name of the Report"
              type="text"
              className="border p-2 w-full rounded text-sm"
            />
          </div>

          <div>
            <label className="block text-sm text-blue-400 mb-2">
              Frequency
            </label>
            <select className="border p-2 w-full rounded text-sm">
              <option>Daily</option>
              <option>10 Minutes</option>
              <option>5 Minutes</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-blue-400 mb-2">
              Time Zone
            </label>
            <select className="border p-2 w-full rounded text-sm">
              <option>(GMT+4:00) Abu Dhabi</option>
            </select>
          </div>

          <div className="flex space-x-4 flex-wrap">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-blue-400 mb-2">
                First Report Delivery
              </label>
              <input
                type="date"
                className="border p-2 w-full rounded text-sm"
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-blue-400 mb-2">
                Interval
              </label>
              <select className="border p-2 w-full rounded text-sm">
                <option>15 Minutes</option>
                <option>10 Minutes</option>
                <option>5 Minutes</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-blue-400 mb-2">
              Decimal Separator
            </label>
            <select className="border p-2 w-full rounded text-sm">
              <option>Period(.)</option>
            </select>
          </div>

          <div className="flex items-center space-x-3 flex-wrap">
            <div className="flex-grow">
              <label className="block text-sm text-blue-400 mb-2">
                Send Copy to
              </label>
              <input
                name="Send copy to"
                type="text"
                className="border p-2 w-full rounded text-sm"
              />
            </div>
            <TrashIcon className="h-5 w-5 text-red-600 cursor-pointer mt-6" />
          </div>

          <button className="text-blue-500">+ Add another Recipient</button>

          <button className="bg-blue-500 text-white px-6 py-2 rounded w-full hover:bg-blue-600">
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReport;