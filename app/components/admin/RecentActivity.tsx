'use client';

import { Clock, UserCheck, FileText, User, LogOut } from 'lucide-react';

const activities = [
  { 
    id: 1, 
    user: 'John Doe', 
    action: 'clocked in', 
    time: '2 minutes ago', 
    type: 'info',
    icon: UserCheck 
  },
  { 
    id: 2, 
    user: 'Jane Smith', 
    action: 'submitted leave request', 
    time: '15 minutes ago', 
    type: 'warning',
    icon: FileText 
  },
  { 
    id: 3, 
    user: 'Mike Johnson', 
    action: 'completed training', 
    time: '1 hour ago', 
    type: 'success',
    icon: FileText 
  },
  { 
    id: 4, 
    user: 'Sarah Williams', 
    action: 'updated profile', 
    time: '2 hours ago', 
    type: 'info',
    icon: User 
  },
  { 
    id: 5, 
    user: 'Tom Brown', 
    action: 'clocked out', 
    time: '3 hours ago', 
    type: 'info',
    icon: LogOut 
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
        <Clock size={20} className="text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div 
              key={activity.id} 
              className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors"
            >
              <div className={`p-2 rounded-full flex-shrink-0 ${
                activity.type === 'success' ? 'bg-green-100' :
                activity.type === 'warning' ? 'bg-yellow-100' :
                'bg-blue-100'
              }`}>
                <Icon 
                  size={16} 
                  className={
                    activity.type === 'success' ? 'text-green-600' :
                    activity.type === 'warning' ? 'text-yellow-600' :
                    'text-blue-600'
                  } 
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                </p>
                <div className="flex items-center mt-1">
                  <Clock size={12} className="text-gray-400 mr-1" />
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
              
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                activity.type === 'success' ? 'bg-green-500' :
                activity.type === 'warning' ? 'bg-yellow-500' :
                'bg-blue-500'
              }`}></div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium py-2 hover:bg-blue-50 rounded-lg transition-colors">
        View All Activity
      </button>
    </div>
  );
}