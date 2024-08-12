"use client";
import Link from 'next/link';
import { BsFlower1 } from "react-icons/bs";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../../theme/Theme Switcher"
import { TbMenuDeep } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaUserShield } from 'react-icons/fa';
export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const pathname = usePathname();

  const [session, setSession]= useState(false);
  const [isAdmin, setIsAdmin]= useState(false);
  
  return (
    <nav className='dark:bg-gray-900'>
      {/* Drawer Toggle Button */}
      <div className="lg:p-6 p-4 flex items-center justify-between">
        <Link href={'/'} className='font-semibold'>NailTales</Link>
        <div className='flex gap-6 items-center'>
          <button type="button">
            <ThemeSwitcher />
          </button>
          <button
            className={isOpen ? 'text-slate-500' : ''}
            type="button"
            onClick={toggleDrawer}
            aria-controls="drawer-navigation"
          >
          

            <TbMenuDeep className='text-2xl hover:text-slate-400 rounded-lg' />
          </button>
        </div>
      </div>

      {/* Drawer Component */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } bg-slate-100 dark:bg-slate-900`}  // Ensure these classes are correct
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className=""
        >
          <Link href={'/'} className='font-medium'>NailTales</Link>
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
          className="text-slate-300 dark:text-slate-600 bg-transparent text-sm p-1.5 absolute top-3 right-2.5 inline-flex items-center"
        >
          <IoCloseSharp />
          <span className="sr-only">Close menu</span>
        </button>

        <div className="py-4 overflow-y-auto text-sm font-normal">
        <ul className="space-y-2">
  <li className={pathname == "/" ? "active" : ""}>
    <Link
      href="/"
      className="flex items-center p-2 rounded group hover:bg-slate-400"
    >
      <RiHome2Line className="text-xl" />
      <span className="ms-3">Home</span>
    </Link>
  </li>
  <li className={pathname == "/blog" ? "active" : ""}>
    <Link
      href="/blog"
      className="flex items-center p-2 rounded group hover:bg-slate-400"
    >
      <IoMdBook className="text-xl" />
      <span className="flex-1 ms-3 whitespace-nowrap">Blog</span>
      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm rounded-full bg-slate-300 dark:bg-slate-600">
        3
      </span>
    </Link>
  </li>
  <li className={pathname == "/about" ? "active" : ""}>
    <Link
      href="/about"
      className="flex items-center p-2 rounded group hover:bg-slate-400"
    >
      <GoQuestion className="text-xl" />
      <span className="flex-1 ms-3 whitespace-nowrap">About</span>
    </Link>
  </li>
  <li className={pathname == "/contact" ? "active" : ""}>
    <Link
      href="/contact"
      className="flex items-center p-2 rounded group hover:bg-slate-400"
    >
      <IoMailOutline className="text-xl" />
      <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
    </Link>
  </li>
  {isAdmin && (
    <li className={pathname == "/admin" ? "active" : ""}>
      <Link
        href="/admin"
        className="flex items-center p-2 rounded group hover:bg-slate-400"
      >
        <FaUserShield className="text-xl" />
        <span className="flex-1 ms-3 whitespace-nowrap">Admin</span>
      </Link>
    </li>
  )}
  <li className={pathname == "/login" ? "active" : ""}>
    <Link
      href="/login"
      className="flex items-center p-2 rounded group hover:bg-slate-400"
    >
      <CiLogin className="text-xl" />
      <span className="flex-1 ms-3 whitespace-nowrap">Login</span>
    </Link>
  </li>
  {session && (
    <li>
      <Link
        href="/logout"
        className="flex items-center p-2 rounded group hover:bg-slate-400"
      >
        <FiLogOut className="text-xl" />
        <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
      </Link>
    </li>
  )}
</ul>

        </div>
      </div>
    </nav>
  );
}
