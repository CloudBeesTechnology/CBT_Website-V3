'use client';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';

interface SideBarProps {
    isSidebarOpen?: boolean;
    closeSidebar: () => void;
    pathname?: string;
}

export const SideBar: React.FC<SideBarProps> = ({
    isSidebarOpen,
    closeSidebar,
    pathname

}) => {
    return (
        <>
            {/* Sidebar Navigation */}
            <div className={`fixed top-0 right-0 h-screen p-10 bg-blue_gray text-white  shadow-lg z-50 transition-transform duration-700 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={closeSidebar} className="absolute top-9 left-4 text-xl text-white border-2 border-white rounded-full p-1">
                    <MdClose className="w-4 h-4" />
                </button>
                <ul className="flex flex-col gap-5 mt-12 font-medium text-md">
                    <li><Link href="/" onClick={closeSidebar} className={pathname === '/' ? 'text-primary' : 'hover:text-primary'}>Home</Link></li>
                    <li><Link href="/services" onClick={closeSidebar} className={pathname === '/services' ? 'text-primary' : 'hover:text-primary'}>Services</Link></li>
                    <li><Link href="/projects" onClick={closeSidebar} className={pathname === '/projects' ? 'text-primary' : 'hover:text-primary'}>Projects</Link></li>
                    <li><Link href="/careers" onClick={closeSidebar} className={pathname === '/careers' ? 'text-primary' : 'hover:text-primary'}>Careers</Link></li>
                    <li><Link href="/products" onClick={closeSidebar} className={pathname === '/products' ? 'text-primary' : 'hover:text-primary'}>Products</Link></li>
                    <li><Link href="/about" onClick={closeSidebar} className={pathname === '/about' ? 'text-primary' : 'hover:text-primary'}>Who we are</Link></li>
                    <li><Link href="/gallery" onClick={closeSidebar} className={pathname === '/gallery' ? 'text-primary' : 'hover:text-primary'}>Gallery</Link></li>
                    <li><Link href="https://b2vtech.com" target="_blank">Courses</Link></li>
                    <li><Link href="/blogs" onClick={closeSidebar} className={pathname === '/blogs' ? 'text-primary' : 'hover:text-primary'}>Blog</Link></li>
                    {/* <li><Link href="/solutions" onClick={closeSidebar} className={pathname === '/solutions' ? 'text-primary' : 'hover:text-primary'}>Solutions</Link></li> */}
                    <li><Link href="/contact" onClick={closeSidebar} className={pathname === '/contact' ? 'text-primary' : 'hover:text-primary'}>Contact Us</Link></li>
                </ul>
            </div>
        </>
    );
};
