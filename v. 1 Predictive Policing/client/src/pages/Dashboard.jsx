import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const stats = [
  { name: 'Total Incidents', value: '2,651', change: '+12%', trend: 'up' },
  { name: 'High Risk Areas', value: '24', change: '-3%', trend: 'down' },
  { name: 'Response Time', value: '8.2m', change: '-14%', trend: 'down' },
  { name: 'Prediction Accuracy', value: '94%', change: '+2%', trend: 'up' },
];

const Dashboard = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
              >
                <dt>
                  <p className="text-sm font-medium text-gray-500 truncate">{item.name}</p>
                </dt>
                <dd className="pb-6 flex items-baseline sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                  <p
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {item.trend === 'up' ? (
                      <ArrowUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                    ) : (
                      <ArrowDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                    )}
                    <span className="ml-1">{item.change}</span>
                  </p>
                </dd>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
            <div className="border-t border-gray-200">
              {/* Activity list would go here */}
              <div className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">New hotspot identified</p>
                    <p className="text-sm text-gray-500">Downtown area shows increased activity</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">2h ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;