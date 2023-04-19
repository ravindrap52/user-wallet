'use client';

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

type NavLink = {
  href: string;
  children: React.ReactNode;
};

export const NavLink = ({ href, children }: NavLink) => {
  const pathName = usePathname();
  const active = pathName === href;
  return (
    <Link
      className={`px-10 py-3  text-white  flex items-center ${active ? 'underline' : ''}`}
      
      href={href}
      prefetch={false}
    >
      {children}
    </Link>
  );
};
