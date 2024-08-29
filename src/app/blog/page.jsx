"use client"

import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/card/BlogCard';
import BlogCardSkeleton from '@/components/skeleton/BlogCardSkeleton';

// Define the fetchData function if it is not defined elsewhere
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const blogsData = await fetchData('/blogs.json');
  //       setBlogs(blogsData);
  //     } catch (error) {
  //       console.error('Failed to fetch blogs:', error);
  //       setError('Failed to load blogs.');
  //     } finally {
  //       setLoading(false); // Set loading to false after data is fetched or error occurs
  //     }
  //   };

  //   getData();
  // }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch data from your API or endpoint
        const response = await fetch('http://localhost:3000/api/blog'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blogsData = await response.json();
        setBlogs(blogsData); // Set the fetched data
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        setError('Failed to load blogs.');
      } finally {
        setLoading(false); // Set loading to false once the data is fetched or an error occurs
      }
    };

    getData();
  }, []); 



  if (loading) {
    return (
      <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">Latest Blog Posts</h1>
        <div className="grid lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
         
        </div>
      </div>
    </section>
 
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">Latest Blog Posts</h1>
        <div className="flex  flex-wrap justify-around gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
