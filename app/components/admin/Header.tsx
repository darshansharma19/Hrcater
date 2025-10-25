'use client';

import React, { useState } from 'react';
import { Search, User, LogOut, Settings, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Dashboard' }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    // Clear any auth tokens/session here
    console.log('Logging out...');
  };

  return (
    <header className="bg-white border-b border-gray-200 flex-shrink-0 shadow-sm">
      <div className="h-20 px-6 flex items-center justify-between gap-6">
        {/* Left Section - Dynamic Page Title */}
        <div className="flex items-center min-w-[200px]">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              size={18} 
            />
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Right Section - Language & User */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 pr-8 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-gray-700 bg-white cursor-pointer">
              <option value="en">EN</option>
              <option value="hi">HI</option>
              <option value="es">ES</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
          </div>

          {/* User Menu */}
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <User size={18} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">User Name</span>
              <ChevronDown 
                className={`text-gray-500 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} 
                size={16}
              />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <>
                {/* Backdrop to close menu */}
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setShowUserMenu(false)}
                ></div>
                
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">User Name</p>
                    <p className="text-xs text-gray-500 mt-1">user@hrcater.com</p>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setShowUserMenu(false);
                      console.log('Navigate to profile');
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 transition-colors"
                  >
                    <User size={16} />
                    <span>My Profile</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      setShowUserMenu(false);
                      console.log('Navigate to settings');
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 transition-colors"
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </button>
                  
                  <hr className="my-2" />
                  
                  <button 
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;