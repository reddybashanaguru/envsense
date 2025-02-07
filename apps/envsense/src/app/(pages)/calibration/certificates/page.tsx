import React from 'react';

const Calibration: React.FC = () => {
  const calibrationData = [
    {
      deviceName: 'Device A',
      calibratedOn: '2024-12-01',
      dueDate: '2025-12-01',
      status: 'Within due',
    },
    {
      deviceName: 'Device B',
      calibratedOn: '2024-11-15',
      dueDate: '2025-11-15',
      status: 'Overdue',
    },
    {
      deviceName: 'Device C',
      calibratedOn: '2024-10-20',
      dueDate: '2025-10-20',
      status: 'Within due',
    },
  ];

  return (
    <div className="w-full h-screen p-6 bg-white shadow-lg">
      <h1 className="text-xl font-bold text-gray-800 mb-6">
        Calibration Records
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto ">
          <thead>
            <tr className="bg-gray-100">
              <th className=" px-6 py-3 text-left font-medium text-gray-600">
                Device Name
              </th>
              <th className=" px-6 py-3 text-left font-medium text-gray-600">
                Calibrated On
              </th>
              <th className=" px-6 py-3 text-left font-medium text-gray-600">
                Due Date
              </th>
              <th className=" px-6 py-3 text-left font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {calibrationData.map((device, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-50 transition-all`}
              >
                <td className=" px-6 py-3">{device.deviceName}</td>
                <td className=" px-6 py-3">{device.calibratedOn}</td>
                <td className=" px-6 py-3">{device.dueDate}</td>
                <td
                  className={` px-6 py-3 ${
                    device.status === 'Within due'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {device.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calibration;
