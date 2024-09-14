"use client";
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../../theme/Theme Switcher"
import { TbMailPlus, TbMenuDeep } from "react-icons/tb";
import { RiHome2Line } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaUserShield } from 'react-icons/fa';
import { GrCircleQuestion } from "react-icons/gr";
import { useAuth } from '@/context/AuthContext';
import { AuthContext } from '@/FirebaseProbider/FirbaseProvider';
 import axios from 'axios';
export default function Drawer() {
  const { usern } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin, authToken, logout, setAuthToken } = useAuth();
  const [blogCount, setBlogCount] = useState(null);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const pathname = usePathname();
  const [session, setSession] = useState(false);
  
  const fetchBlogCount = async () => {
      try {
        const response = await axios.get('https://everydayechoes.vercel.app/api/blogcount');
        console.log('Blog count:', response.data.count);
        setBlogCount(response.data.count); 
      } catch (error) {
        console.error('Error fetching blog count:', error); 
      }
    };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token || usern) {
      // setSession(true);
      setAuthToken(true);
    }
    fetchBlogCount(); 
  }, []);


  return (
    <nav className='dark:bg-gray-900'>

      {/* Drawer Toggle Button */}
      <div className="lg:p-6 p-4 flex items-center justify-between">
        <Link href={'/'} className='font-semibold'>Everyday Echoes</Link>
        <div className='flex gap-6 items-center'>
          <button type="button">
            <ThemeSwitcher />
          </button>
          <button
            className={isOpen ? 'text-slate-500' : ''}
            type="button"
            onClick={toggleDrawer}
            aria-controls="drawer-navigation" >
            <TbMenuDeep className='text-2xl hover:text-slate-400 rounded-lg' />
          </button>
        </div>
      </div>

      {/* Drawer Component */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen px-4 py-8 overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } bg-slate-50 shadow-lg dark:bg-slate-900`}  // Ensure these classes are correct
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className=""
        >
          <Link href={'/'} className='font-medium'>Everyday Echoes</Link>
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
          className="text-slate-600 dark:text-slate-300 bg-transparent text-sm p-1.5 absolute top-3 right-2.5 inline-flex items-center"
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
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-[11px] rounded-full bg-slate-300 dark:bg-slate-600">
                  {blogCount} new
                </span>
              </Link>
            </li>
            <li className={pathname == "/about" ? "active" : ""}>
              <Link
                href="/about"
                className="flex items-center p-2 rounded group hover:bg-slate-400"
              >
                <GrCircleQuestion className="text-xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">About</span>
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

            {authToken ? (
              <li className='w-full hover:bg-slate-400 rounded'>
                <button
                  onClick={logout}

                  className="flex items-center p-2 rounded group hover:bg-slate-400 "
                >
                  <FiLogOut className="text-xl" />
                  <span className="flex-1 ms-3 whitespace-nowrap ">Logout</span>
                </button>
              </li>
            ) : (
              <li className={pathname == "/subscribe" ? "active" : ""}>
                <Link
                  href="/subscribe"
                  className="flex items-center p-2 rounded group hover:bg-slate-400"
                >
                  <TbMailPlus className="text-xl" />
                  <span className="flex-1 ms-3 whitespace-nowrap font-medium">Subscribe</span>
                </Link>
              </li>
            )}

          </ul>

        </div>
      </div>
    </nav>
  );
}



