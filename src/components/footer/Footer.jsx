import React from 'react'
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import { TbMailPlus } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="bg-slate-400 text-black py-8 ">

<div className='gap-6 flex flex-col lg:flex-row lg:justify-between justify-center container mx-auto px-4'>

{/* Subscribe */}
 <div className="">
        <div className="relative flex w-full max-w-[32rem]">
        <div className="relative h-10 w-full min-w-[20rem]">
          <input type="email"
            className="peer h-full w-full rounded-[7px] border border-black bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2
             focus:border-gray-900 focus:border-t-transparent focus:outline-0 "
            placeholder=" "  />
          <label
            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Subscribe with Email
          </label>
        </div>
        <button
          className="!absolute right-1 top-1 select-none rounded bg-gray-600 text-gray-200 py-1.5 px-4 text-center align-middle font-sans text-xs font-bold uppercase  transition-all hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button" title='Subsctibe'>
        <TbMailPlus className='text-lg'/>
        </button>
      </div>
      </div>

  {/* Social MediLinkSection */}
      <div className="flex gap-6 items-center justify-center">
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

</div>
     
     


    
    </footer>
  );
};

export default Footer;
