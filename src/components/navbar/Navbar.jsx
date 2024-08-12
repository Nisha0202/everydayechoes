"use client";
import Link from 'next/link';
import { BsFlower1 } from "react-icons/bs";
import { RiMenuFold4Fill } from "react-icons/ri";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../../theme/Theme Switcher"

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const pathname = usePathname();

  return (
    <>
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
            <RiMenuFold4Fill className='text-2xl hover:text-slate-400' />
          </button>
        </div>
      </div>

      {/* Drawer Component */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-slate-100 dark:bg-slate-900`}  // Ensure these classes are correct
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold uppercase"
        >
          <Link href={'/'} className='font-semibold'>NailTales</Link>
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

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2">
            <li className={pathname == "/" ? "active" : ""}>
              <Link
                href="/"
                className="flex items-center p-2 rounded group hover:bg-slate-400"
              >
                <span className="ms-3">Home</span>
              </Link>
            </li>
            <li className={pathname == "/blog" ? "active" : ""}>
              <Link
                href="/blog"
                className="flex items-center p-2 rounded group hover:bg-slate-400"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Blog</span>
                <span className="inline-flex items-center justify-center font-medium w-3 h-3 p-3 ms-3 text-sm rounded-full
                 bg-slate-300 dark:bg-slate-600">
                  3
                </span>
              </Link>
            </li>
            <li className={pathname == "/about" ? "active" : ""}>
              <Link
                href="/about"
                className="flex items-center p-2 rounded group hover:bg-slate-400"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">About</span>
              </Link>
            </li>
            <li className={pathname == "/contact" ? "active" : ""}>
              <Link
                href="/contact"
                className="flex items-center p-2 rounded group hover:bg-slate-400"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </Link>
            </li>
            <li className={pathname == "/login" ? "active" : ""}>
              <Link
                href="/login"
                className="flex items-center p-2 rounded group hover:bg-slate-400"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
