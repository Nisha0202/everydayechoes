"use client";

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
            About Everyday Echoes
          </h1>
          <p className='py-4 text-center font-light- max-w-xl'>
            Welcome to Everyday Echoes: a glimpse into the daily life of a female student.
          </p>
          <p className='max-w-xl text-sm font-light text-center'>
            At Everyday Echoes, I share the highs, lows, and everything in between of my everyday experiences. From my journey as a computer science student to the simple joys of life in Dhaka, my blog is a space to reflect and connect over the ordinary moments that make life extraordinary.
          </p>
        </div>

        <div className={`mt-8 ${isExpanded ? 'block' : 'hidden'}`}>
          <h1 className='text-gray-900 dark:text-white text-xl font-extrabold mb-2 text-center'>
            My Journey
          </h1>
          <p className='max-w-xl text-sm font-light text-center'>
            My story began as a student diving into the complexities of computer science while balancing life in Dhaka. From late-night study sessions to exploring the vibrant culture of the city, Everyday Echoes chronicles my path through education, personal growth, and everyday adventures.
          </p>
        </div>

        <button
          onClick={toggleExpand}
          className="mt-6 px-4 py-2 text-sm font-medium text-white   
          rounded-md bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 hover:dark:bg-blue-600 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900">
        
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;


