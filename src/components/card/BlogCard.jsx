import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { format } from 'date-fns';
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
        <div className='p-6 md:p-10  max-w-96 relative'>
        <div className='mb-8' style={{ position: 'relative', width: '100%', height: '200px' }}>
          <Image
            src={blog.image}
            alt={blog.title}
            className="rounded hero"
            fill
            objectFit="cover"
            loading= "lazy"
          />
        </div>
        <div>
          {/* <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{blog.date}</p> */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
  {blog.date ? format(new Date(blog.date), 'dd MMMM yyyy') : 'Date not available'}
</p>
          <h2 className="text-gray-900 dark:text-white  md:text-3xl text-xl font-extrabold mb-2">
            {truncateWords(blog.title, 8)}
          </h2>
          <p className="text-sm/relaxed  font-normal text-gray-500 dark:text-gray-400 mb-6">
            {truncateWords(blog.description, 14)}
          </p>
          <Link href={`/blog/${blog.id}`} className="underline font-medium text-sm inline-flex items-center hover:scale-105 absolute lg:bottom-4 bottom-0">
            Read more
            <FaArrowRightLong className='ms-1.5' />
          </Link>
        </div>
      </div>


    </>
  )
}


