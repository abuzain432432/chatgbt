'use client';
import React from 'react';
import { UserButton } from '@clerk/nextjs';
import dynamic from 'next/dynamic';

const NoSSRMobileSidebar = dynamic(() => import('./MobileSidebar'), {
  ssr: false,
});

export default function Navbar() {
  return (
    <div className='flex items-center p-4'>
      <NoSSRMobileSidebar />
      <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
}
