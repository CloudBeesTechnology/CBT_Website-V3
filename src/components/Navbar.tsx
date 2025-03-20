'use client';

import Link from 'next/link';
import Image from 'next/image';
import CbtLogo from "../assets/HomeSection/CbtLogo/cbtLogo.png";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMenuOpen(!isSidebarOpen);
  };

  // Close the sidebar when close button is clicked
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue_gray text-red p-10 min-h-[100px] max-h-[100px] flex items-center justify-between sticky z-40 top-0 w-full shadow-md shadow-blue-gray/50">

      <div className="flex items-center">
        <Image
          src={CbtLogo}
          alt="Cbt Logo"
          width={250}
          height={51}
        />
      </div>

      {/* Hamburger Icon for smaller screens */}
      {!isSidebarOpen && (
        <div className={`xl:hidden flex items-center`}>
          <button onClick={toggleMenu} className="text-white">
            {/* Using react-icons for Hamburger icon */}
            <FaBars className="w-6 h-6 " />
          </button>
        </div>
      )}

      {/* Navigation links (Desktop View) */}
      <ul className={`xl:flex xl:space-x-8 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link href="/" className={`${pathname === '/' ? 'text-primary' : 'hover:text-primary'}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/ourServices" className={`${pathname === '/ourServices' ? 'text-primary' : 'hover:text-primary'}`}>
            Service
          </Link>
        </li>
        <li>
          <Link href="/ourProjects" className={`${pathname === '/ourProjects' ? 'text-primary' : 'hover:text-primary'}`}>
            Project
          </Link>
        </li>
        <li>
          <Link href="/careers" className={`${pathname === '/careers' ? 'text-primary' : 'hover:text-primary'}`}>
            Careers
          </Link>
        </li>
        <li>
          <Link href="/products" className={`${pathname === '/products' ? 'text-primary' : 'hover:text-primary'}`}>
            Products
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${pathname === '/about' ? 'text-primary' : 'hover:text-primary'}`}>
            Who we are
          </Link>
        </li>
        <li>
          <Link href="/gallery" className={`${pathname === '/gallery' ? 'text-primary' : 'hover:text-primary'}`}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/courses" className={`${pathname === '/courses' ? 'text-primary' : 'hover:text-primary'}`}>
            Courses
          </Link>
        </li>
        <li>
          <Link href="/blogs" className={`${pathname === '/blogs' ? 'text-primary' : 'hover:text-primary'}`}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/solutions" className={`${pathname === '/solutions' ? 'text-primary' : 'hover:text-primary'}`}>
            Solutions
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`${pathname === '/contact' ? 'text-primary' : 'hover:text-primary'}`}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Sidebar (for mobile view) */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-[200px] h-full bg-blue_gray text-white p-8 shadow-lg z-50">
          <button onClick={closeSidebar} className="absolute top-8 right-4 text-2xl text-white border-2 border-white rounded-full">
            <MdClose className="w-4 h-4" />
          </button>
          <ul className="space-y-6">
            <li>
              <Link href="/" onClick={closeSidebar} className={`${pathname === '/' ? 'text-primary' : 'hover:text-primary'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/ourServices" onClick={closeSidebar} className={`${pathname === '/ourServices' ? 'text-primary' : 'hover:text-primary'}`}>
                Service
              </Link>
            </li>
            <li>
              <Link href="/ourProjects" onClick={closeSidebar} className={`${pathname === '/ourProjects' ? 'text-primary' : 'hover:text-primary'}`}>
                Project
              </Link>
            </li>
            <li>
              <Link href="/careers" onClick={closeSidebar} className={`${pathname === '/careers' ? 'text-primary' : 'hover:text-primary'}`}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={closeSidebar} className={`${pathname === '/products' ? 'text-primary' : 'hover:text-primary'}`}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeSidebar} className={`${pathname === '/about' ? 'text-primary' : 'hover:text-primary'}`}>
                Who we are
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={closeSidebar} className={`${pathname === '/gallery' ? 'text-primary' : 'hover:text-primary'}`}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/courses" onClick={closeSidebar} className={`${pathname === '/courses' ? 'text-primary' : 'hover:text-primary'}`}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={closeSidebar} className={`${pathname === '/blogs' ? 'text-primary' : 'hover:text-primary'}`}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/solutions" onClick={closeSidebar} className={`${pathname === '/solutions' ? 'text-primary' : 'hover:text-primary'}`}>
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeSidebar} className={`${pathname === '/contact' ? 'text-primary' : 'hover:text-primary'}`}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
