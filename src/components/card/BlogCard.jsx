import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

export default function BlogCard({ blog }) {

  // text: '#AAFF01',
  function truncateWords(str, numWords) {
    if (!str) return '';
    const words = str.split(' '); // array of words
    if (words.length <= numWords) return str;
    return words.slice(0, numWords).join(' ') + '...';
  }

  return (
    <>
      {/* <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 md:p-10"> */}
        <div className='p-6 md:p-10'>
        <div className='mb-4' style={{ position: 'relative', width: '100%', height: '200px' }}>
          <Image
            src={blog.image}
            alt={blog.title}
            className="rounded hero"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{blog.date}</p>
          <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
            {truncateWords(blog.title, 8)}
          </h2>
          <p className="text-sm/relaxed  font-normal text-gray-500 dark:text-gray-400 mb-4">
            {truncateWords(blog.description, 50)}
          </p>
          <Link href={`/blog/${blog.id}`} className="underline font-medium text-sm inline-flex items-center hover:scale-105">
            Read more
            <FaArrowRightLong className='ms-1.5' />
          </Link>
        </div>
      </div>


    </>
  )
}


