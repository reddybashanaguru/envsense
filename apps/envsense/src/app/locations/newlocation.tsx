import ExistLocations from "./existlocations";

export default function NewLocation() {
  return (
    <div className="  p-4 space-y-6">
      <h3 className="text-lg font-bold">Locations</h3>

      <div className=" p-5   bg-gray-50 rounded-lg shadow-lg">
        <h5 className="text-m font-bold mb-4">New Location</h5>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Parent Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Parent Location"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              New Location Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Location Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
              Add Location
            </button>
          </div>
        </div>
      </div>
       <ExistLocations locations={['CITY PHARMACY SHARJAH','CITY PHARMACY JAFZA','CITY PHARMACY DUBAI',]} />
    </div>
  );
}
