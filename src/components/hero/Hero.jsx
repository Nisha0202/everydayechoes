import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaBook, FaHeart, FaLaptopCode} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from '../footer/Footer';
export default function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 mb-8">
            <div className="bg-gray-50 flex dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <div>
                    <Link href={'/'} className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                        <FaLaptopCode className='mr-1' />
                        Study Session
                    </Link>
                    <h1 className="text-gray-900 max-w-xl mt-1 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                        A Day in the Life of a Computer Science Student
                    </h1>
                    <p className="text-sm font-normal max-w-xl text-gray-500 dark:text-gray-400 mb-6">
                        Join me as I navigate through coding challenges, attending lectures, and balancing it all with my personal life in Dhala. Here's a glimpse into my daily routine.
                    </p>
                    <Link href={'/'} className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center
                     text-white 
                     rounded-md bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 hover:dark:bg-blue-600 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Read more
                        <FaArrowRightLong className='ms-1.5' />
                    </Link>
                </div>
                <div className="w-1/2 hidden lg:flex justify-end">
                    <div className='relative group'>
                        <Image
                            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width={450}
                            height={180}
                            alt="Picture of a study session"
                            className="rounded hero"
                        />
                        <div className="absolute bg-black  border-2 border-gray-500 inset-0 bg-opacity-30 rounded opacity-30 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <Link href={'/'} className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                        <FaBook className='mr-1' />
                        Study Tips
                    </Link>
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                        How I Stay on Top of My Studies
                    </h2>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
                        Staying organized is key. Here are my tips for managing coursework, projects, and prepping for exams as a computer science student.
                    </p>
                    <Link href={'/'} className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-sm inline-flex items-center">
                        Read more
                        <FaArrowRightLong className='ms-1.5' />
                    </Link>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <Link href={'/'} className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                        <FaHeart className='mr-1' />
                        Life Balance
                    </Link>
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                        Balancing Studies and Personal Life
                    </h2>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
                        Finding time for myself, friends, and family is a challenge. Here’s how I try to keep everything in balance while pursuing my degree.
                    </p>
                    <Link href={'/'} className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-sm inline-flex items-center">
                        Read more
                        <FaArrowRightLong className='ms-1.5' />
                    </Link>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
    



    )
}
