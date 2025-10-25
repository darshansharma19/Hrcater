'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const menuItems = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: '/images/dashboard.png',
  },
  {
    name: 'User Management',
    href: '/admin/user-management',
    icon: '/images/user-management.png',
    subItems: [
      {
        name: 'Students',
        href: '/admin/user-management/students',
        icon: '/images/dashboard.png',
      },
      {
        name: 'HRs',
        href: '/admin/user-management/hrs',
        icon: '/images/user-management.png',
      },
    ],
  },
  {
    name: 'Session',
    href: '/admin/session',
    icon: '/images/session.png',
  },
  {
    name: 'Finance',
    href: '/admin/finance',
    icon: '/images/finance.png',
  },
  {
    name: 'Verification',
    href: '/admin/verification',
    icon: '/images/verification.png',
  },
  {
    name: 'Notification',
    href: '/admin/notification',
    icon: '/images/notification.png',
  },
  {
    name: 'Content',
    href: '/admin/content',
    icon: '/images/contect.png',
  },
  {
    name: 'AI Analytics',
    href: '/admin/ai-analytics',
    icon: '/images/Group.png',
  },
  {
    name: 'System settings',
    href: '/admin/settings',
    icon: '/images/setting.png',
  },
  {
    name: 'Support & Issue',
    href: '/admin/support',
    icon: '/images/support.png',
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(['User Management']);

  const toggleExpand = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: any) => {
    if (item.subItems) {
      return item.subItems.some((sub: any) => pathname === sub.href);
    }
    return false;
  };

  return (
    <aside 
      className="bg-white fixed left-0 top-0 shadow-sm"
      style={{
        width: '255px',
        height: '896px',
        zIndex: 20,
      }}
    >
      {/* Logo */}
      <div 
        className="flex items-center justify-center"
        style={{
          height: '86px',
          padding: '20px',
        }}
      >
        <Image
          src="/images/logo.png"
          alt="HR Cater Logo"
          width={120}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Navigation - Scrollable */}
      <nav 
        className="overflow-y-auto"
        style={{
          height: 'calc(896px - 86px)',
          padding: '20px',
        }}
      >
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isItemActive = isActive(item.href) || isParentActive(item);
            const isExpanded = expandedItems.includes(item.name);
            const hasSubItems = item.subItems && item.subItems.length > 0;

            return (
              <li key={item.name}>
                {hasSubItems ? (
                  <>
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        isItemActive
                          ? 'bg-[#D6EFFF] text-[#254E70]'
                          : 'text-[#254E70] hover:bg-[#D6EFFF]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                        <span className="font-medium text-sm">{item.name}</span>
                      </div>
                      {isExpanded ? (
                        <ChevronDown size={14} className="text-[#254E70]" />
                      ) : (
                        <ChevronRight size={14} className="text-[#254E70]" />
                      )}
                    </button>

                    {/* Sub Items */}
                    {isExpanded && (
                      <ul className="ml-9 mt-1 space-y-0.5">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                                isActive(subItem.href)
                                  ? 'bg-[#D6EFFF] text-[#254E70] font-medium'
                                  : 'text-[#254E70] hover:bg-[#D6EFFF]'
                              }`}
                            >
                              <Image
                                src={subItem.icon}
                                alt={subItem.name}
                                width={16}
                                height={16}
                                className="object-contain"
                              />
                              <span>{subItem.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-[#D6EFFF] text-[#254E70]'
                        : 'text-[#254E70] hover:bg-[#D6EFFF]'
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}