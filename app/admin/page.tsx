'use client';

import React from 'react';
import { Users, AlertTriangle, ChevronDown } from 'lucide-react';

// Dashboard Component
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Stats Cards */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Total Number of Users Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-gray-400" />
                  <h3 className="text-gray-500 font-medium">Total Number of Users</h3>
                </div>
                <span className="text-3xl font-bold text-gray-900">700</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 text-sm mb-2">Students</p>
                  <p className="text-2xl font-bold text-gray-900">300</p>
                </div>
                <div className="bg-teal-100 rounded-lg p-4">
                  <p className="text-gray-600 text-sm mb-2">Hr's</p>
                  <p className="text-2xl font-bold text-gray-900">300</p>
                </div>
              </div>
            </div>

            {/* Active Users Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-gray-400" />
                  <h3 className="text-gray-500 font-medium">Active Users</h3>
                </div>
                <span className="text-3xl font-bold text-gray-900">700</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 text-sm mb-2">Active Students</p>
                  <p className="text-2xl font-bold text-gray-900">300</p>
                </div>
                <div className="bg-teal-100 rounded-lg p-4">
                  <p className="text-gray-600 text-sm mb-2">Active Hr's</p>
                  <p className="text-2xl font-bold text-gray-900">300</p>
                </div>
              </div>
            </div>

            {/* Session Booked Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-gray-400" />
                  <h3 className="text-gray-500 font-medium">Session booked</h3>
                </div>
                <span className="text-3xl font-bold text-gray-900">700</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="relative mb-2">
                    <select className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm appearance-none pr-8">
                      <option>Today</option>
                      <option>This Week</option>
                      <option>This Month</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">300</p>
                </div>
                <div className="bg-teal-100 rounded-lg p-4">
                  <p className="text-gray-600 text-sm mb-2">New Sign Ups</p>
                  <p className="text-2xl font-bold text-gray-900">300</p>
                </div>
              </div>
            </div>

            {/* Alerts Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={20} className="text-gray-400" />
                  <h3 className="text-gray-500 font-medium">Alerts</h3>
                </div>
                <span className="text-3xl font-bold text-gray-900">700</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-100 rounded-lg p-4">
                  <p className="text-gray-600 text-sm mb-2">Payment error</p>
                  <p className="text-2xl font-bold text-gray-900">300</p>
                </div>
                <div className="bg-teal-100 rounded-lg p-4">
                  <p className="text-gray-600 text-sm mb-2">Disputes</p>
                  <p className="text-2xl font-bold text-gray-900">300</p>
                </div>
              </div>
            </div>

            {/* Revenue Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-gray-500 font-medium mb-6">Revenue</h3>
              
              <div className="flex items-center justify-between">
                {/* Circular Chart */}
                <div className="relative w-40 h-40">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="12"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#8b5cf6" strokeWidth="12"
                      strokeDasharray="77 220" strokeDashoffset="0"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#ec4899" strokeWidth="12"
                      strokeDasharray="66 220" strokeDashoffset="-77"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#3b82f6" strokeWidth="12"
                      strokeDasharray="77 220" strokeDashoffset="-143"/>
                  </svg>
                </div>

                {/* Legend */}
                <div className="flex-1 pl-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700 font-medium">Wallet</span>
                    </div>
                    <span className="text-gray-900 font-semibold">400</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                      <span className="text-gray-700 font-medium">Commission</span>
                    </div>
                    <span className="text-gray-900 font-semibold">300</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-gray-700 font-medium">Payouts</span>
                    </div>
                    <span className="text-gray-900 font-semibold">200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Conversion Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-gray-500 font-medium mb-4">Conversion</h3>
              
              {/* Gauge Chart */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"
                      strokeDasharray="188 251" strokeLinecap="round"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="8"
                      strokeDasharray="125 251" strokeLinecap="round"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">300</span>
                  </div>
                </div>
              </div>

              {/* Stats List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <Users size={14} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm">Visitors</span>
                  </div>
                  <span className="text-gray-900 font-semibold">400</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <Users size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">Registered</span>
                  </div>
                  <span className="text-gray-900 font-semibold">300</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">$</span>
                    </div>
                    <span className="text-gray-700 text-sm">Paid</span>
                  </div>
                  <span className="text-gray-900 font-semibold">200</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="text-gray-700 text-sm">Sessions</span>
                  </div>
                  <span className="text-gray-900 font-semibold">20</span>
                </div>
              </div>
            </div>

            {/* Pending Verification Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-gray-700 font-semibold mb-4">Pending verification</h3>
              
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <span className="text-gray-900 font-medium">Shivani Gupta</span>
                    </div>
                    <div className="relative">
                      <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 text-sm text-gray-600">
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 text-blue-600 text-sm font-medium hover:text-blue-700">
                View all
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;