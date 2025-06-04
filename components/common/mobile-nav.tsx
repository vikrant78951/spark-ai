'use client';

import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/data';
import Link from 'next/link';

import type { NavigationItem } from '@/lib/defination';

const NavItem = React.memo(({ item }: { item: NavigationItem }) => {
  return (
    <li>
      <Link href={item.href}>
        <p className='font-md'>{item.title}</p>
      </Link>
    </li>
  );
});

const MobileNav = () => {
  return (
    <div className='block lg:hidden'>
      <Drawer direction='right'>
        <DrawerTrigger asChild>
          <Button variant={'ghost'}>
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className='flex flex-row items-center justify-between'>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerClose asChild>
              <Button size='lg' variant={'ghost'}>
                <X />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div>
            <nav className='p-5'>
              <div className='flex flex-col gap-4'>
                {navigation &&
                  navigation.map((item) => (
                    <NavItem key={`${item.title}`} item={item} />
                  ))}
              </div>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

NavItem.displayName = 'NavItem';
export default MobileNav;
