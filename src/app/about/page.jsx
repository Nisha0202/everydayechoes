"use client"

import React, { useState } from 'react';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 flex flex-col items-center justify-center">
        <div>
          <h1 className='text-gray-900 dark:text-white text-3xl font-extrabold mb-2 text-center'>
            About NailTales
          </h1>
          <p className='py-4 text-center font-light'>
            Welcome to NailTales: your ultimate destination for all things nail art!
          </p>
          <p className='max-w-xl text-sm font-light text-center'>
            At NailTales, we believe that nail art is more than just a trend; it's a form of self-expression and creativity that everyone can enjoy. Whether you're a seasoned nail artist or just starting your journey, our mission is to inspire and guide you through the vibrant world of nail design.
          </p>
        </div>

        <div className={`mt-8 ${isExpanded ? 'block' : 'hidden'}`}>
          <h1 className='text-gray-900 dark:text-white text-xl font-extrabold mb-2 text-center'>
            Our Story
          </h1>
          <p className='max-w-xl text-sm font-light text-center'>
            Founded by a passionate group of nail enthusiasts, NailTales began as a simple blog dedicated to sharing nail art tips and tutorials. Over time, our community of followers grew, and so did our desire to offer more. Today, NailTales is a thriving hub of information, inspiration, and innovation in the nail art world.
          </p>
        </div>

        <button
          onClick={toggleExpand}
          className="mt-6 px-4 py-2 text-sm font-medium text-white rounded-md bg-[#d64779] dark:bg-[#a8325c]  hover:bg-pink-800 hover:dark:bg-pink-600 focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-900"
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;

