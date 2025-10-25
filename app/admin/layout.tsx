'use client';

import { usePathname } from 'next/navigation';
import Header from '../components/admin/Header';
import Sidebar from '../components/admin/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Function to get page title based on route
  const getPageTitle = () => {
    if (pathname === '/admin') return 'Dashboard';
    if (pathname === '/admin/notification') return 'Notification';
    if (pathname.includes('/admin/students')) return 'Students';
    if (pathname.includes('/admin/hrs')) return 'HRs';
    if (pathname.includes('/admin/session')) return 'Session';
    if (pathname.includes('/admin/finance')) return 'Finance';
    if (pathname.includes('/admin/verification')) return 'Verification';
    if (pathname.includes('/admin/content')) return 'Content';
    if (pathname.includes('/admin/ai-analytics')) return 'AI Analytics';
    if (pathname.includes('/admin/system-settings')) return 'System Settings';
    if (pathname.includes('/admin/support')) return 'Support & Issue';
    if (pathname.includes('/admin/user-management')) return 'User Management';
    return 'Dashboard';
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header title={getPageTitle()} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}