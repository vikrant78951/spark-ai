import React from 'react';
import Link from 'next/link';
import { APPLICATION } from '@/lib/enum';
import { LandPlot } from 'lucide-react';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='align-center flex justify-center gap-2'>
        <i className='flex'>
          <LandPlot />
        </i>
        <p>{APPLICATION.name}</p>
      </div>
    </Link>
  );
};

export default Logo;
