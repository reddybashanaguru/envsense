import React from 'react';

const ReportType: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded shadow-lg max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select a Report Type
        </label>
        <select className="border p-2 rounded w-full">
          <option>Tabular</option>
          <option>Graph</option>
          <option>Paragraph</option>
        </select>
      </div>

      <p className="text-xs text-gray-600 mb-4">
        <strong>Tabular :</strong> A Tabular Report is a table of individual
        readings with their corresponding timestamps for the selected monitoring
        points. The Tabular report contains Alarm Excursion Events, Excursion
        acknowledgements, and comments. Though similar to an Export, it is
        delivered as a PDF instead of a CSV file. The report is delivered via
        email and can be viewed in Pickerson.
      </p>

      <p className="text-xs text-gray-600 mb-4">
        <strong>NOTE :</strong> Tabular Reports are often very large if they
        cover a long period of time, include many monitoring points, and/or if
        the relevant data loggers have a very small sample interval. Users can
        choose to down-sample the data to reduce the size of reports.
      </p>

      <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        <label className="text-sm text-gray-700">Add signature line</label>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Save and continue
      </button>
    </div>
  );
};

export default ReportType;
