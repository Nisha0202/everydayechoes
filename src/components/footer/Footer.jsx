import React from 'react'
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import { TbMailPlus } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="bg-slate-300  py-8 dark:bg-slate-700  ">

      <div className='gap-6 flex flex-col lg:flex-row lg:justify-between items-center justify-center container mx-auto px-4'>

        {/* Subscribe */}
        <div className="text-xs lg:text-sm">

          <div>Never Miss a Blog Post – Subscribe Now!</div>
    
        </div>

        {/* Social MediLinkSection */}
        <div className="flex gap-6 items-center justify-center">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-sm items-center hover:text-gray-200"
          >
            <FaFacebookF className="mr-1 text-base" />
            Facebook
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-sm items-center hover:text-gray-200"
          >
            <FaTwitter className="mr-1 text-base" />
            Twitter
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex  text-sm items-center hover:text-gray-200"
          >
            <FaInstagram className="mr-1 text-base" />
            Instagram
          </Link>
        </div>

      </div>





    </footer>
  );
};

export default Footer;
