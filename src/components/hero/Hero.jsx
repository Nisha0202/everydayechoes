import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from '../footer/Footer';
export default function Hero() {

  function truncateWords(str, numWords) {
    if (!str) return '';
    const words = str.split(' '); // array of words
    if (words.length <= numWords) return str;
    return words.slice(0, numWords).join(' ') + '...';
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 mb-8">
        <div className="bg-gray-100 flex flex-col-reverse lg:flex-row lg:gap-12 gap-6 dark:bg-gray-800 border
         border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">31 Jan 2024</p>
            <h1 className="text-gray-900 max-w-xl lg:pt-1 pt-0 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              A Day in the Life of a Computer Science Student
            </h1>
            <p className="text-sm font-normal max-w-xl text-gray-500 dark:text-gray-400 mb-6">
              Join me as I navigate through coding challenges, attending lectures, and balancing it all with my personal life in Dhaka. Here's a glimpse into my daily routine.
            </p>
            <Link href={'/'} className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white rounded-md bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 hover:dark:bg-blue-600 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900">
              Read more
              <FaArrowRightLong className='ms-1.5' />
            </Link>
          </div>

          <div className="lg:w-1/2 w-full rounded justify-end" >
          <div className='relative group'style={{ position: 'relative', height: '300px' }}>
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt= "Picture of a study session"
              className="rounded hero"
              layout="fill"
              objectFit="cover" 
            />
          
              <div className="absolute bg-black border-2 border-gray-500 inset-0 bg-opacity-30 rounded-md opacity-30 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              </div>  
              </div>
          </div>
  
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">25 Jan 2024</p>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
            {truncateWords('How I Stay on Top of My Studies', 10)}      
            </h2>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
            {truncateWords('Staying organized is key. Here are my tips for managing coursework, projects, and prepping for exams as a computer science student.', 50)}   
            </p>
            <Link href={'/'} className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-sm inline-flex items-center">
              Read more
              <FaArrowRightLong className='ms-1.5' />
            </Link>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">20 Jan 2024</p>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
               {truncateWords('Balancing Studies and Personal Life', 10)}
            </h2>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
            {truncateWords('Finding time for myself, friends, and family is a challenge. Here’s how I try to keep everything in balance while pursuing my degree.', 50)}  
            </p>
            <Link href={'/'} className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-sm inline-flex items-center">
              Read more
              <FaArrowRightLong className='ms-1.5' />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>

  )
}
