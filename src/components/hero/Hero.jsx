import React from 'react'
import { TbTools } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import { FaVideo } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8">
                <div className="bg-gray-50 flex dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <div>
                        <Link href={'/'} className="bg-pink-100 text-pink-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-pink-400 mb-2">
                            <FaVideo className='mr-1' />
                            Nail Art Tutorial
                        </Link>
                        <h1 className="text-gray-900 max-w-xl mt-1 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                            Create Stunning Nail Art in Minutes
                        </h1>
                        <p className="text-sm font-normal max-w-xl text-gray-500 dark:text-gray-400 mb-6">
                            Dive into the world of nail art with our easy-to-follow tutorials, perfect for beginners and pros alike. Learn how to create eye-catching designs that will leave everyone impressed.
                        </p>
                        <Link href={'/'} className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-900">
                            Read more
                            <FaArrowRightLong className='ms-1.5' />
                        </Link>
                    </div>
                    <div className="w-1/2 hidden lg:flex justify-end ">
                        <div className='relative group'>
                            <Image
                                src="/img/14.jpg"
                                width={450}
                                height={180}
                                alt="Picture of a nail art"
                                className="rounded hero"
                            />
                            <div className="absolute bg-black inset-0 bg-opacity-50 rounded opacity-20 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">

                            </div>


                        </div>
                    </div>


                </div>











                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <Link href={'/'} className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            <HiPaintBrush className='mr-1' />
                            Design Tips
                        </Link>
                        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            Perfect Your Nail Art Designs
                        </h2>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
                            Discover the secrets to creating flawless nail art designs with our expert tips and tricks. Whether you're a beginner or an experienced artist, these insights will elevate your nail game.
                        </p>
                        <Link href={'/'} className="text-pink-600 dark:text-pink-500 hover:underline font-medium text-sm inline-flex items-center">
                            Read more
                            <FaArrowRightLong className='ms-1.5' />
                        </Link>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <Link href={'/'} className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                            <TbTools className='mr-1' />
                            Tools & Techniques
                        </Link>
                        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            Top Nail Art Tools You Need
                        </h2>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
                            Explore the essential tools and techniques that every nail artist should have in their kit. From brushes to dotting tools, get the lowdown on what works best.
                        </p>
                        <Link href={'/'} className="text-pink-600 dark:text-pink-500 hover:underline font-medium text-sm inline-flex items-center">
                            Read more
                            <FaArrowRightLong className='ms-1.5' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>



    )
}
