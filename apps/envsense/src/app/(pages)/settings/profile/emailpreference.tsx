import React from "react";

const EmailPreference : React.FC = () =>{
    return<div className="p-3">
    <h2 className="text-lg font-semibold mb-4 ">Email Preferences</h2>
    <div>
      <div className="mb-4 ">
        <label className="block text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Email Notifications
        </label>
        <select className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Receive All</option>
          <option>Only Important</option>
          <option>None</option>
        </select>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
        Save
      </button>
    </div>
  </div>
}

export default EmailPreference;