'use client';

import React, { useState } from 'react';
import { Search, Download, ChevronDown, ArrowUpDown } from 'lucide-react';

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState('support-ticket');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const tickets = [
    {
      id: 1,
      hrStudent: 'Razorpay',
      ticketId: '400',
      titleName: 'Title Name',
      description: 'savkjab svikabo jas vaks v sbvuaosv avcavpw cascaoclanvae .',
      status: 'Pending'
    }
  ];

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">750K</div>
          <div className="text-sm text-gray-500">Verified members</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">7,500</div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">7,500</div>
          <div className="text-sm text-gray-500">Banned</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">7,500</div>
          <div className="text-sm text-gray-500">Distributions</div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex items-center gap-6 px-6">
            <button
              onClick={() => setActiveTab('support-ticket')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'support-ticket'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Support Ticket
            </button>
            <button
              onClick={() => setActiveTab('dispute-panel')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'dispute-panel'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Dispute panel
            </button>
            <button
              onClick={() => setActiveTab('session-reports')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'session-reports'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              session reports
            </button>
            <button className="py-4 px-2 text-gray-400 text-sm">...</button>
          </div>
        </div>

        {/* Search and Export */}
        <div className="p-6 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="search"
              placeholder="Search client"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
            <Download size={18} />
            Download Excel
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-y border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">
                  <button className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900">
                    HR/student
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="px-6 py-3 text-left">
                  <button className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900">
                    Ticket ID
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="px-6 py-3 text-left">
                  <button className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900">
                    Title Name
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="px-6 py-3 text-left">
                  <button className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900">
                    Description
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="px-6 py-3 text-right">
                  <button className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900 ml-auto">
                    Status
                    <ArrowUpDown size={14} />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{ticket.hrStudent}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{ticket.ticketId}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{ticket.titleName}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate">
                    {ticket.description}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end">
                      <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-1.5 pr-8 text-sm text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500">
                          <option>Pending</option>
                          <option>Approved</option>
                          <option>Resolved</option>
                          <option>Rejected</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Page 1 | 4 de 4
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded bg-green-600 text-white text-sm font-medium hover:bg-green-700">
              1
            </button>
            <button className="px-3 py-1 rounded text-gray-600 text-sm font-medium hover:bg-gray-100">
              2
            </button>
            <span className="px-2 text-gray-400">...</span>
            <button className="px-3 py-1 rounded text-gray-600 text-sm font-medium hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-1 rounded text-gray-600 text-sm font-medium hover:bg-gray-100">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;