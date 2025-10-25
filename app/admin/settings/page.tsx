"use client";
import React, { useState } from 'react';
import { Search, Plus, Edit2, Eye, EyeOff, Trash2, Download } from 'lucide-react';


const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  // General Settings - Roles
  const [selectedRole, setSelectedRole] = useState('');
  const [username, setUsername] = useState('');
  
  // Users Settings
  const [allowProfilePictures, setAllowProfilePictures] = useState(true);
  const [allowUserSignup, setAllowUserSignup] = useState(true);
  const [sendNotifications, setSendNotifications] = useState(true);
  const [allowProfileEdit, setAllowProfileEdit] = useState(true);
  
  // Security Settings
  const [require2FA, setRequire2FA] = useState(true);
  const [encryptData, setEncryptData] = useState(true);
  const [enableFirewall, setEnableFirewall] = useState(true);
  const [allowIncomingTraffic, setAllowIncomingTraffic] = useState(true);
  const [allowOutgoingTraffic, setAllowOutgoingTraffic] = useState(true);
  
  // Commission Rate
  const [applyToAll, setApplyToAll] = useState(false);
  
  // VOIP Settings
  const [generateVoipNumbers, setGenerateVoipNumbers] = useState(true);

  const tabs = [
    { id: 'general', label: 'General Settings' },

    { id: 'integration', label: 'Integration API' },
    { id: 'commission', label: 'Commission Rate' },
    { id: 'voip', label: 'VOIP settings' },
    { id: 'backup', label: 'Data Back up' },
  ];

  const permissions = Array(12).fill('Required Field');

  const voipRecords = [
    { sno: 1, name: 'HR session', number: 400, noUsed: 300, participants: 5, status: 'Pending', account: 'Bank Account', document: 'Seef faucibus' },
    { sno: 2, name: 'webinars', number: 400, noUsed: 300, participants: 'Leo posuere', status: 'Pending', account: 'Bank Account', document: 'Seef faucibus' },
    { sno: 3, name: 'hackathons', number: 400, noUsed: 300, participants: 'Leo posuere', status: 'Pending', account: 'Bank Account', document: 'Seef faucibus' },
    { sno: 4, name: 'Razorpay', number: 400, noUsed: 300, participants: 'Leo posuere', status: 'Pending', account: 'Bank Account', document: 'Seef faucibus' },
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Roles Settings</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Roles</label>
              <select 
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
                <option value="user">User</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Sections to give permission of</label>
              <div className="grid grid-cols-2 gap-3">
                {permissions.map((perm, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                    <span className="text-sm text-gray-700">{perm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">People with Admin roles</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Given permissions</label>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {permissions.map((perm, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                    <span className="text-sm text-gray-700">{perm}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">People with Moderator roles</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsersSettings = () => (
    <div className="space-y-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Users' Settings</h2>
      
      <div className="grid grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Users uploading Profile Picture</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Allow profile pictures</span>
              <button
                onClick={() => setAllowProfilePictures(!allowProfilePictures)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  allowProfilePictures ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  allowProfilePictures ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Limit of Responses for free users</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>50 Responses</option>
              <option>100 Responses</option>
              <option>200 Responses</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Size Limit for Profile Pictures (In Kb)</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Default: 4096 Kb (4Mb)</option>
              <option>2048 Kb (2Mb)</option>
              <option>8192 Kb (8Mb)</option>
            </select>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">User Sign up</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Allow new users to sign up</span>
              <button
                onClick={() => setAllowUserSignup(!allowUserSignup)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  allowUserSignup ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  allowUserSignup ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Notification about Newly added Events</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Notify users about new AI Agents</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Notifications</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Send notifications to users</span>
              <button
                onClick={() => setSendNotifications(!sendNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  sendNotifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  sendNotifications ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Response format</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Text only</option>
              <option>JSON</option>
              <option>XML</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Default Theme for Users</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Light Theme</option>
              <option>Dark Theme</option>
              <option>Auto</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Profile Edit</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Allow users to edit their profile</span>
              <button
                onClick={() => setAllowProfileEdit(!allowProfileEdit)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  allowProfileEdit ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  allowProfileEdit ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Account Creation Section */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Account Creation</h3>
            <p className="text-sm text-gray-600">Select/Edit Required fields for users after Sign Up</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={18} />
            Add New Field
          </button>
        </div>

        <div className="space-y-6">
          {[1, 2].map((item) => (
            <div key={item} className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">{item}. Field Title</label>
              </div>
              <div className="col-span-3">
                <input
                  type="text"
                  defaultValue={item === 1 ? "Email Address" : "First Name"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Field Input Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Text</option>
                  <option>Email</option>
                  <option>Number</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Input Characters Limit</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Default</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2 mt-8">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                  <span className="text-sm text-gray-700">Required Field</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Click to check/uncheck</p>
              </div>
              <div className="col-span-2 flex gap-2 mt-8">
                <button className="text-blue-600 hover:text-blue-700">
                  <Eye size={18} />
                </button>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Field Description</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Add a description"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Edit2 size={18} className="text-gray-400" />
              </div>
            </div>
            <div className="col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Not set"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Edit2 size={18} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Security</h2>
      
      <div className="grid grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Two Factor Authentication (2FA)</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Require Two Factor Authentication</span>
              <button
                onClick={() => setRequire2FA(!require2FA)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  require2FA ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  require2FA ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Encryption of Stored Data</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Encrypt Stored Data</span>
              <button
                onClick={() => setEncryptData(!encryptData)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  encryptData ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  encryptData ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">FireWall Protection</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Enable Firewall</span>
              <button
                onClick={() => setEnableFirewall(!enableFirewall)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  enableFirewall ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enableFirewall ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Firewall Port Range</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                defaultValue="80-192"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Edit2 size={18} className="text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Perform System BackUp</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Weekly</option>
              <option>Daily</option>
              <option>Monthly</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Check for System Anomaly</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Hourly</option>
              <option>Daily</option>
              <option>Weekly</option>
            </select>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Login Attempts before Account Lockout</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>5</option>
              <option>3</option>
              <option>10</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Data Encryption Method</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>AES: Advanced Encryption Standard</option>
              <option>RSA</option>
              <option>SHA-256</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Incoming Traffic</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Allow Incoming Traffic</span>
              <button
                onClick={() => setAllowIncomingTraffic(!allowIncomingTraffic)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  allowIncomingTraffic ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  allowIncomingTraffic ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Firewall Protocols</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>3 Selected (TCP, UDP, ICMP)</option>
              <option>TCP Only</option>
              <option>All Protocols</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Scheduled Time for System Backup</label>
            <input
              type="time"
              defaultValue="02:00"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Generate Anomaly Report</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Weekly</option>
              <option>Daily</option>
              <option>Monthly</option>
            </select>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Password Policy</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Uppercase+Letter - 3 more items</option>
              <option>Strong</option>
              <option>Medium</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Store Data for how long</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>3 Months</option>
              <option>6 Months</option>
              <option>1 Year</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Outgoing Traffic</label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Allow Outgoing Traffic</span>
              <button
                onClick={() => setAllowOutgoingTraffic(!allowOutgoingTraffic)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  allowOutgoingTraffic ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  allowOutgoingTraffic ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Blocked IP Addresses</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>104 Blocked</option>
              <option>View All</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Number of Backups to keep</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 3</option>
              <option>Last 5</option>
              <option>Last 10</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Action for Suspicious User Activity</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Temporarily Block and Alert Admin</option>
              <option>Alert Only</option>
              <option>Block Permanently</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommissionRate = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Commission rate</h2>
          <p className="text-sm text-gray-600 mt-1">Set different kinds of commission</p>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Save changes
        </button>
      </div>

      <div className="flex items-center gap-2">
        <input 
          type="checkbox" 
          checked={applyToAll}
          onChange={(e) => setApplyToAll(e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded" 
        />
        <span className="text-sm text-gray-700">apply same to all</span>
      </div>

      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Commission rate</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">HR session commission</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        </div>
    </div>
  );                    
};

export default SystemSettings;