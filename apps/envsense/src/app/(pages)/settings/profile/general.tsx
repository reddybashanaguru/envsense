import React from 'react';

const General: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">
          General Settings
        </h2>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Role (Optional)
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Assign a role to the user/contact if alerts will be configured to
              send to individuals with specific roles. If no roles are
              available, contact your account owner to enable this
              functionality.
            </p>
            <select className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose a role...</option>
              <option>Admin</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Locations (Optional)
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Select one or more locations that this user/contact has
              responsibility over and may receive alerts for.
            </p>
            <select className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Locations</option>
              <option>CITY SHAFZA</option>
            </select>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4 col-span-2">
              Contact Info
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Label
                </label>
                <input
                  type="text"
                  defaultValue="Primary"
                  placeholder="Enter a label"
                  className="border border-gray-300 p-2 w-full text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mb-4 space-y-2 space-x-2 ">
            <button className="text-blue-500 hover:text-blue-600 transition-colors">
              + Add email address
            </button>
            <button className="text-blue-500 hover:text-blue-600 transition-colors">
              + Add Phone Number
            </button>
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default General;
