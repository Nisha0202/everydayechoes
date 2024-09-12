"use client";

import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/card/BlogCard';
import BlogCardSkeleton from '@/components/skeleton/BlogCardSkeleton';
import { IoMdArrowDropup } from "react-icons/io";
import { NextSeo } from 'next-seo';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showGoTop, setShowGoTop] = useState(false); // Track if "Load More" has been clicked

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://everydayechoes.vercel.app/api/blog?page=${page}&limit=3`); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        setBlogs(prevBlogs => {
          const newBlogs = data.blogs.filter(blog => !prevBlogs.some(prevBlog => prevBlog._id === blog._id));
          return [...prevBlogs, ...newBlogs];
        });
        setHasMore(page < data.pagination.totalPages);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        setError('Failed to load blogs.');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [page]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
      setShowGoTop(true); // Show the "Go to Top" button after loading more
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust this value as needed
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  };

  if (loading && blogs.length === 0) {
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

<title>All Blogs | Everyday Echoes</title>
        {/* <NextSeo title="Everyday Echoes - All Blogs" description= "Browse all blogs" /> */}
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">Latest Blog Posts</h1>
        <div className="flex flex-wrap justify-around lg:gap-6 gap-8">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
        {hasMore && (
          <div className="text-center mt-8 lg:mt-6">
            <button onClick={loadMore} className="bg-blue-500 text-sm text-white px-3 py-1 rounded text-center  dark:bg-blue-500 hover:bg-blue-700 hover:dark:bg-blue-600 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900">
              Read More
            </button>
          </div>
        )}
        {showGoTop && (
          <div className="fixed bottom-5 right-4">
            <button 
              onClick={scrollToTop} 
              className="py-3 px-3 rounded-full shadow-xl  bg-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-600">
              <IoMdArrowDropup/>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
