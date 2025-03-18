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
          <Link href="/" className={`${pathname === '/' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/ourServices" className={`${pathname === '/ourServices' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Service
          </Link>
        </li>
        <li>
          <Link href="/ourProjects" className={`${pathname === '/ourProjects' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Project
          </Link>
        </li>
        <li>
          <Link href="/careers" className={`${pathname === '/careers' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Careers
          </Link>
        </li>
        <li>
          <Link href="/products" className={`${pathname === '/products' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Products
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${pathname === '/about' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Who we are
          </Link>
        </li>
        <li>
          <Link href="/gallery" className={`${pathname === '/gallery' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/courses" className={`${pathname === '/courses' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Courses
          </Link>
        </li>
        <li>
          <Link href="/blogs" className={`${pathname === '/blogs' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/solutions" className={`${pathname === '/solutions' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Solutions
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`${pathname === '/contact' ? 'text-yellow' : 'hover:text-yellow'}`}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
