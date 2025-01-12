import React from "react";

const Acknowledge: React.FC = () => {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Acknowledge</h1>

      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="alertReason"
        >
          Alert Reason
        </label>
        <input
          id="alertReason"
          type="text"
          placeholder="Reason"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="comments"
        >
          Comments
        </label>
        <input
          id="comments"
          type="text"
          placeholder="Comments"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="actionRequired"
        >
          Additional Action Required
        </label>
        <input
          id="actionRequired"
          type="text"
          placeholder="Action Required"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Submit
      </button>
    </div>
  );
};

export default Acknowledge;