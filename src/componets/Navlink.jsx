'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const pathname = usePathname();
    const isactive = href === pathname;
    return (
        <Link className={`${isactive? "border-b-2 border-green-800":''}`} href={href}>{children}</Link>
    );
};

export default Navlink;