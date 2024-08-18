import Image from 'next/image'
import React from 'react'


import { FaArrowLeft, FaComment, FaHeart } from 'react-icons/fa6';
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

export default function BlogTitle() {
  return (
    <div>

      <div className='w-screen md:h-44 h-36  bg-gray-400 dark:bg-gray-600 grid place-content-center relative'>
        <h1 className='text-center text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white'>A hyperlink points to a whole document</h1>
        <p className='text-center font-light text-xs md:mt-2 mt-1'>Published Date</p>

        <div className='w-full  mx-auto absolute md:-bottom-24 -bottom-24 flex justify-center'>
          <div className="featured-image w-full max-w-xl md:h-32 h-28 mx-auto  relative">
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D"
              alt="Blog Title"
              layout="fill"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className='mx-auto text-center border-2 max-w-2xl'>
        <div className='mt-28  border-2 max-w-xl mx-auto'>
          <div className="actions w-full flex items-center justify-between  text-sm border-2 ">
            <button className="flex items-center text-gray-500 hover:text-gray-700">
              <FaRegHeart className="mr-1 text-base" />
              Like
            </button>
            <button className="flex items-center text-gray-500 hover:text-gray-700">
              <FaRegCommentAlt className="mr-1" />
              Comment
            </button>
          </div>
        </div>
      </div>




    </div>
  )
}




