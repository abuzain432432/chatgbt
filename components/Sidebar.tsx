import { cn } from '@/lib/utils';
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
});
const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Converstion',
    icon: MessageSquare,
    href: '/conversion',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/images-generation',
    color: 'text-pink-700',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/videos-generation',
    color: 'text-orange-700',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music-generation',
    color: 'text-emerald-700',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code-generation',
    color: 'text-green-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];
export default function Sidebar() {
  return (
    <div className='h-full py-4 flex flex-col bg-[#111827]'>
      <div className='px-3 py-2 flex-1'>
        <Link
          className='flex items-center pl-3 mb-14'
          href={'/dashboard'}
        >
          <div className='relative w-8 h-8 mr-4'>
            <Image
              // fill
              alt='logo'
              width={200}
              height={200}
              src={'/logo.png'}
            />
          </div>
          <h1
            className={cn(
              'text-2xl font-bold text-white',
              montserrat.className
            )}
          >
            ChatGbt
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map(route => {
            return (
              <Link
                className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition:'
                key={route.label}
                href={route.href}
              >
                <div className='flex items-center flex-1 gap-4'>
                  <route.icon
                    className={(cn('h-5 w-5 '), route.color)}
                  />
                  <span>{route.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
