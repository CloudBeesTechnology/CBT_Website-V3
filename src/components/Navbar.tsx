'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import CbtLogo from "../assets/HomeSection/CbtLogo/cbtLogo.png";
import NavMenu from "../assets/NavSection/images/NavMenu.png";
import { SideBar } from './Sidebar';

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="bg-blue_gray text-white py-4 px-4 h-28 flex items-center justify-between sticky top-0 w-full shadow-md  z-40">
     <div className='screen-size flex justify-between items-center'>
     <div className="flex items-center">
        <Image src={CbtLogo} alt="Cbt Logo" width={200} height={51} />
      </div>

      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="xl:hidden text-white">
        <Image src={NavMenu} alt="Navbar Menu Icon" className="w-6 h-6" />
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden xl:flex space-x-8">
        <li><Link href="/" className={pathname === '/' ? 'text-primary' : 'hover:text-primary'}>Home</Link></li>
        <li><Link href="/services" className={pathname === '/services' ? 'text-primary' : 'hover:text-primary'}>Service</Link></li>
        <li><Link href="/projects" className={pathname === '/projects' ? 'text-primary' : 'hover:text-primary'}>Project</Link></li>
        <li><Link href="/careers" className={pathname === '/careers' ? 'text-primary' : 'hover:text-primary'}>Careers</Link></li>
        <li><Link href="/products" className={pathname === '/products' ? 'text-primary' : 'hover:text-primary'}>Products</Link></li>
        <li><Link href="/about" className={pathname === '/about' ? 'text-primary' : 'hover:text-primary'}>Who we are</Link></li>
        <li><Link href="/gallery" className={pathname === '/gallery' ? 'text-primary' : 'hover:text-primary'}>Gallery</Link></li>
        <li><Link href="https://b2vtech.com" target="_blank">Courses</Link></li>
        <li><Link href="/blogs" className={pathname === '/blogs' ? 'text-primary' : 'hover:text-primary'}>Blog</Link></li>
        <li><Link href="/contact" className={pathname === '/contact' ? 'text-primary' : 'hover:text-primary'}>Contact Us</Link></li>
      </ul>

      {/* Sidebar Navigation */}
      <SideBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} pathname={pathname} />
      </div>
    </nav>
  );
};
