'use client';  

import Link from 'next/link';
import Image from 'next/image';  
import CbtLogo from "../assets/HomeSection/CbtLogo/cbtLogo.png"; 
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();  
  
  return (
    <nav className="bg-blue_gray text-red p-10 min-h-[100px] max-h-[100px] flex items-center justify-between fixed z-40 top-0 w-full shadow-md shadow-blue-gray/50">
   
      <div className="flex items-center">
        <Image 
          src={CbtLogo} 
          alt="Cbt Logo" 
          width={250}  
          height={51}    
        />
      </div>
      
      {/* Navigation links */}
      <ul className="flex space-x-8 text-white">
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
    </nav>
  );
};
