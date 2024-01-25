import { Metadata } from 'next';
import SideNav from '../ui/dashboard/sidenav';

import { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard',
};

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default Layout;
