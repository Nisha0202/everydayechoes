import React from 'react'
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import { TbMailPlus } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="bg-slate-400 text-black py-8 gap-6 flex flex-col justify-center">

<div className="max-w-md mx-auto ">
      <div className="relative w-full min-w-[260px] h-10">
        <div className="absolute grid w-6 h-6 place-items-center top-2/4 right-3 -translate-y-2/4">
        <button className='rounded'>
           <TbMailPlus aria-hidden="true" className='hover:text-blue-500' />
        </button>
         
        </div>
        <input
          className="peer w-full h-full bg-transparent font-sans font-normal outline-none focus:outline-none transition-all placeholder-shown:border border-black focus:border-2  focus:border-t-transparent text-sm px-3 py-4 rounded-[7px] !pr-9  focus:border-blue-500 focus:text-blue-500"
          placeholder=" "
        />
        <label
          className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
          peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 
          
          after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all 
          peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500  after:border-blue-gray-200 peer-focus:after:!border-blue-500"
        >
         Sunscribe with Email
        </label>
      </div>
    </div>

      {/* Social MediLinkSection */}
      <div className="flex space-x-4 mx-auto">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-200"
        >
          <FaFacebookF className="mr-1" />
          Facebook
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-200"
        >
          <FaTwitter className="mr-1" />
          Twitter
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-200"
        >
          <FaInstagram className="mr-1" />
          Instagram
        </Link>
      </div>

    </footer>
  );
};

export default Footer;
