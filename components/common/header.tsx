import React from 'react';
import {
  Logo,
  DesktopNav,
  ToggleTheme,
  MobileNav,
  Auth,
} from '@/components/common';

const Header = () => {
  return (
    <header>
      <div className='!p-3'>
        <nav className='flex justify-between p-3'>
          <Logo />
          <DesktopNav />
          <div className='flex gap-0 lg:gap-4'>
            <Auth className='hidden lg:block' />
            <ToggleTheme />
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
