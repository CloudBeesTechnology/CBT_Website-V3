// src/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';  // Import Image component from Next.js
import CbtLogo from "../assets/HomeSection/CbtLogo/cbtLogo.png"; // Your logo file

export const Navbar = () => {
  return (
    <nav className="bg-[#313F48] text-red p-4 min-h-[100px] max-h-[100px] flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src={CbtLogo} 
          alt="Cbt Logo" 
          width={250}  
          height={51}    
        />
      </div>
      
      {/* Navigation links */}
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/ourServices" className="hover:text-gray-400">
            Our Services
          </Link>
        </li>
        <li>
          <Link href="/ourProjects" className="hover:text-gray-400">
            Our Projects
          </Link>
        </li>
        <li>
          <Link href="/careers" className="hover:text-gray-400">
            Careers
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-gray-400">
            Products
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-gray-400">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/courses" className="hover:text-yellow">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="hover:text-gray-400">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/solutions" className="hover:text-gray-400">
            Solutions
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
