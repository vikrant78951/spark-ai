import React from 'react';
import { navigation } from '@/lib/data';
import type { NavigationItem } from '@/lib/defination';
import Link from 'next/link';
const NavItem = React.memo(({ item }: { item: NavigationItem }) => {
  return (
    <li>
      <Link href={item.href} className={`block p-2`}>
        <h6>{item.title}</h6>
      </Link>
    </li>
  );
});

const DesktopNav = () => {
  return (
    <div className='hidden lg:block'>
      <ul className={`flex items-center`}>
        {navigation &&
          navigation.map((item) => (
            <NavItem key={`${item.title}`} item={item} />
          ))}
      </ul>
    </div>
  );
};

NavItem.displayName = 'NavItem';
export default DesktopNav;
