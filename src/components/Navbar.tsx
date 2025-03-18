// src/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';  
import CbtLogo from "../assets/HomeSection/CbtLogo/cbtLogo.png"; 

export const Navbar = () => {
  return (
    <nav className="bg-[#313F48] text-red p-10 min-h-[100px] max-h-[100px] flex items-center justify-between fixed z-40 top-0 w-full">
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
      <ul className="flex space-x-8 text-white">
        <li>
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
        </li>
        <li>
          <Link href="/ourServices" className="hover:text-primary">
            Our Services
          </Link>
        </li>
        <li>
          <Link href="/ourProjects" className="hover:text-primary">
            Our Projects
          </Link>
        </li>
        <li>
          <Link href="/careers" className="hover:text-primary">
            Careers
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-primary">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/courses" className="hover:text-primary">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="hover:text-primary">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/solutions" className="hover:text-primary">
            Solutions
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
