import React from 'react';

const PredictiveAnalysis = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Predictive Analysis</h1>
        
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">Risk Assessment</h2>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                Map Visualization Placeholder
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">Prediction Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time Range</label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>Next 24 hours</option>
                    <option>Next 7 days</option>
                    <option>Next 30 days</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Crime Type</label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>All Types</option>
                    <option>Theft</option>
                    <option>Assault</option>
                    <option>Burglary</option>
                  </select>
                </div>
                
                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Generate Prediction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalysis;