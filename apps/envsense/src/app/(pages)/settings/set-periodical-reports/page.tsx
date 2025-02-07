import React from 'react';
import {
  FaMailBulk,
  FaCopy,
  FaDownload,
  FaHistory,
  FaTrash,
} from 'react-icons/fa';

interface Report {
  reportName: string;
  frequency: string;
  mostRecentReport: string;
}

interface PeriodicalReportsProps {
  reports: Report[];
}

const PeriodicalReports: React.FC<PeriodicalReportsProps> = ({ reports }) => {
  const dummyReports = [
    {
      reportName: 'Monthly Sales Report',
      frequency: 'Monthly',
      mostRecentReport: 'Dec 2024',
    },
    {
      reportName: 'Weekly Inventory Report',
      frequency: 'Weekly',
      mostRecentReport: 'Jan 2025',
    },
    {
      reportName: 'Yearly Budget Report',
      frequency: 'Yearly',
      mostRecentReport: '2024',
    },
    {
      reportName: 'Daily Performance Report',
      frequency: 'Daily',
      mostRecentReport: 'Jan 18, 2025',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      <div>
        <h1 className="text-xl font-semibold mb-4">Your Recurring Reports</h1>
        <button className="text-blue-400 border-b border-b-black text-sm px-4 py-2 rounded-lg transition duration-200 absolute top-0 right-0 mt-4 mr-4 flex items-center space-x-1">
          <FaHistory className="h-3 w-3 inline" />
          <span>Full Report History</span>
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-300">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-blue-400">
              <th className="p-4 text-left">Report Name</th>
              <th className="p-4 text-left">Frequency</th>
              <th className="p-4 text-left">Most Recent Report</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyReports?.length > 0 ? (
              dummyReports.map((report, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4 align-top">
                    <select className="border border-gray-300 rounded-md p-2 w-full text-left pl-8">
                      <option value={report.reportName}>
                        {report.reportName}
                      </option>
                      <option>Tabular</option>
                    </select>
                  </td>
                  <td className="p-4 align-top">{report.frequency}</td>
                  <td className="p-4 align-top">{report.mostRecentReport}</td>
                  <td className="p-4 align-top">
                    <div className="flex flex-col space-y-3 text-xs">
                      <button className="bg-white text-blue-500 px-4 py-2 rounded-md flex items-center space-x-2">
                        <FaMailBulk className="h-5 w-5 inline" />
                        <span>Send Sample Report</span>
                      </button>
                      <button className="bg-white text-blue-500 px-4 py-2 rounded-md flex items-center space-x-2">
                        <FaCopy className="h-5 w-5 inline" />
                        <span>Copy into New Report</span>
                      </button>
                      <button className="bg-white text-blue-500 px-4 py-2 rounded-md flex items-center space-x-2">
                        <FaDownload className="h-5 w-5 inline" />
                        <span>Download as PDF</span>
                      </button>
                      <button className="bg-white text-blue-500 px-4 py-2 rounded-md flex items-center space-x-2">
                        <FaHistory className="h-5 w-5 inline" />
                        <span>History</span>
                      </button>
                      <button className="bg-white text-red-600 px-4 py-2 rounded-md flex items-center space-x-2">
                        <FaTrash className="h-5 w-5 inline" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  No reports available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeriodicalReports;
