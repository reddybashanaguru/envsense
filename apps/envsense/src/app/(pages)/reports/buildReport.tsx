import React from "react";

const BuildReport: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center">
          Build Report
        </h1>
        <div>
          <h2 className="text-lg mb-4 font-semibold">Select Report Type</h2>
          <select className="border p-2 mb-6 w-full rounded">
            <option defaultValue={'Monitoring Point'}>Monitoring Point</option>
            <option>Excursions</option>
            <option>Warnings</option>
            <option>Tabular</option>
            <option>Calibration overdue</option>
          </select>
          <button className="bg-blue-500 text-white px-6 py-2 rounded w-full hover:bg-blue-600 transition-colors duration-200">
            Save and continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuildReport;