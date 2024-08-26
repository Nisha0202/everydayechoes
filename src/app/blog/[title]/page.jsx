"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import BlogCard from '@/components/card/BlogCard';
import CommentSection from '@/components/comment/CommentSection';

export default function BlogTitle({ params }) {

  const [blogData, setBlogData] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/blogs.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const blog = data.find(blog => blog.id === parseInt(params.title, 10));
        if (!blog) {
          throw new Error('Blog post not found');
        }
        setBlogData(blog);

        // Filter out the current blog and select two random related posts
        const related = data.filter(blog => blog.id !== parseInt(params.title, 10));
        setRelatedPosts(related.slice(0, 2)); // Assuming you want the first two blogs
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (params?.title) {
      fetchData();
    } else {
      setError('Blog ID is missing');
      setLoading(false);
    }
  }, [params.title]);


  if (loading) {
    return <div className='w-screen text-center my-4 grid place-content-center'>
      <li className="flex items-center ">
        <div role="status" className="">
          <svg aria-hidden="true" className="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
          <span className="sr-only">Loading...</span>
        </div>
        Preparing to read the blog
      </li>
    </div>;
  }

  if (error) {
    return <div className='w-screen text-center my-4 grid place-content-center text-red-600'>Error: {error}</div>;
  }

  if (!blogData) {
    return <div className='w-screen text-center my-4 grid place-content-center font-semibold'>No blog post found.</div>;
  }

  return (
    <div>
      <div className='w-full md:h-44 h-36 bg-gray-400 dark:bg-gray-600 grid place-content-center relative'>
        <h1 className='text-center text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white'>
          {blogData.title}
        </h1>
        <p className='text-center font-light text-xs md:mt-2 mt-1'>
          {blogData.date}
        </p>

        <div className='w-full mx-auto absolute md:-bottom-24 -bottom-24 flex justify-center'>
          <div className="featured-image w-full max-w-xl md:h-32 h-28 mx-auto relative">
            <Image
              src={blogData.image}
              alt={blogData.title}
              blurDataURL="data:..."
              placeholder="blur"
              fill
              objectFit="cover"
              className="md:rounded-md border-2 border-gray-300 dark:border-gray-800"
            />
          </div>
        </div>
      </div>

      <div className='mx-auto text-center max-w-2xl'>
        <div className='mt-28 max-w-xl mx-auto'>
          <div className="actions w-full flex items-center justify-between text-gray-600 dark:text-gray-300 text-sm px-6">
            <button className="flex items-center">
              <FaRegHeart className="mr-1 text-base" />
              Like
            </button>
            <button className="flex items-center">
              <FaRegCommentAlt className="mr-1" />
              Comment
            </button>
          </div>

          {/* content */}
          <div className="blog-post text-start lg:px-2 px-4 py-6 max-w-4xl mx-auto text-gray-900 dark:text-gray-300 text-sm">

            {blogData.description.split('.').reduce((acc, sentence, index) => {
              const paragraphIndex = Math.floor(index / 6); // Determine the paragraph index
              if (!acc[paragraphIndex]) {
                acc[paragraphIndex] = ''; // Initialize the paragraph if it doesn't exist
              }
              acc[paragraphIndex] += sentence.trim() + '. '; // Add the sentence to the paragraph
              return acc;
            }, []).map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}

          </div>



        </div>

      </div>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* related + comments */}
      <div className='w-full flex flex-wrap justify-center max-w-screen-xl mx-auto'>

        {/* comments */}
        <div className='flex flex-col flex-1'>
          <h1 className='text-lg w-full font-bold text-gray-900 dark:text-white text-center mb-4  lg:mb-8 mt-6'>Recent Comments</h1>
          <div>
            <CommentSection />
          </div>

        </div>

        {/* related blogs */}
        <div className='flex flex-col items-center justify-center gap-2 max-w-3xl mb-4 md:px-8 px-4'>
          <h1 className='text-lg font-bold text-gray-900 dark:text-white mb-1 mt-6'>Related Blogs</h1>
          <div className='flex flex-col justify-center mx-auto mb-6'>
            {relatedPosts.map((post) => (

              <BlogCard key={post.id} blog={post} />
            ))}
          </div>

        </div>

      </div>


    </div>
  );
}







