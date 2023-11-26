import React, { ReactNode } from 'react';

export default function layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='flex h-full items-center justify-center'>
      {children}
    </div>
  );
}
