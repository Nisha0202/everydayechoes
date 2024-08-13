"use client"
import React from 'react'
import Link from 'next/link';
export default function NotFound() {
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col gap-4 dark:bg-gray-900'>
        <h1 className='font-semibold text-lg'>
          Not Found  
        </h1>
        <p>
          Sorry, this page does not exits.
        </p>
        <Link href= {'/'} className='text-blue-500'>Return Home</Link>
        
        
        </div>
  )
}
