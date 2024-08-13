"use client"
import React from 'react'
import Link from 'next/link';
export default function Error() {
  return (
    <div className='h-screen w-screen flex justify-center items-center mb-4 flex-col gap-4 dark:bg-gray-900'>
    <h1 className='font-semibold text-lg'>
      Error Occured
    </h1>

    <Link href= {'/'} className='text-blue-500'>Return Home</Link>
    
    
    </div>
  )
}
