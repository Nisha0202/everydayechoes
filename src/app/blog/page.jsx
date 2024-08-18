"use client"

import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/card/BlogCard';
import Link from 'next/link';

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
  

  useEffect(() => {
    const getData = async () => {
      try {
        const blogsData = await fetchData('/blogs.json');
        setBlogs(blogsData);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    getData();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 mb-8">
        <h1 className="text-4xl/tight font-extrabold text-gray-900 dark:text-white mb-8">Latest Blog Posts</h1>
        <div className="grid lg:grid-cols-3 gap-8">
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
