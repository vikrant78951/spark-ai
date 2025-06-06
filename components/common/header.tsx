import React from 'react';
import {
  Logo,
  DesktopNav,
  ToggleTheme,
  MobileNav,
  Auth,
} from '@/components/common';
import Wrapper from '@/components/ui/wrapper';
import FixedHeader from '@/components/provider/scroll-header';

const Header = () => {
  return (
    <header className={`${true && 'fixed top-2 left-0 z-50 w-full'}`}>
      <Wrapper className={`p-3`}>
        <FixedHeader className={`flex justify-between rounded-full p-3`}>
          <Logo />
          <DesktopNav />
          <div className='flex items-center gap-0 lg:gap-2'>
            <Auth className='hidden lg:flex' />
            <ToggleTheme />
            <MobileNav />
          </div>
        </FixedHeader>
      </Wrapper>
    </header>
  );
};

export default Header;
