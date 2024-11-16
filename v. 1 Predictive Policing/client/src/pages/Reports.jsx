import React from 'react';

const Reports = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Generated Reports</h2>
              <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700">
                Generate New Report
              </button>
            </div>
            
            <div className="border-t border-gray-200">
              <div className="divide-y divide-gray-200">
                {[1, 2, 3].map((report) => (
                  <div key={report} className="py-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Monthly Crime Analysis Report</p>
                      <p className="text-sm text-gray-500">Generated on Dec 1, 2023</p>
                    </div>
                    <button className="px-3 py-1 text-sm text-gray-700 hover:text-gray-900">
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;