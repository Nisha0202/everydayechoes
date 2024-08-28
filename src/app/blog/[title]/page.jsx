"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import BlogCard from '@/components/card/BlogCard';
import CommentSection from '@/components/comment/CommentSection';

import CommentModal from '@/components/commentinput/CommentModal';
export default function BlogTitle({ params }) {
  const [blogData, setBlogData] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        const related = data.filter(blog => blog.id !== parseInt(params.title, 10));
        setRelatedPosts(related.slice(0, 2));
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

  const handleCommentClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div className='w-full flex items-center justify-center '>Loading...</div>;
  }

  if (error) {
    return <div className='w-full flex items-center justify-center text-red-500'>Error: {error}</div>;
  }

  if (!blogData) {
    return <div className='w-full  flex items-center justify-center '>No blog post found.</div>;
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

      <div className='mx-auto text-center max-w-2xl '>
        <div className='mt-28 max-w-xl mx-auto'>
          <div className="actions w-full flex items-center justify-between text-gray-600 dark:text-gray-300 text-sm px-6">
            <button className="flex items-center text-xs">
              <FaRegHeart className="mr-1 " />
              {blogData.like}
            </button>
            <button className="flex items-center text-xs" onClick={handleCommentClick}>
              <FaRegCommentAlt className="mr-1" />

            </button>
          </div>

          {/* <div className="blog-post text-start lg:px-2 px-4 py-6 max-w-4xl mx-auto text-gray-900 dark:text-gray-300 text-sm">
            {blogData.description.split('.').reduce((acc, sentence, index) => {
              const paragraphIndex = Math.floor(index / 6);
              if (!acc[paragraphIndex]) {
                acc[paragraphIndex] = '';
              }
              acc[paragraphIndex] += sentence.trim() + '. ';
              return acc;
            }, []).map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div> */}
          <div className="blog-post text-start lg:px-2 px-4 py-6 max-w-4xl mx-auto text-gray-900 dark:text-gray-300 text-sm">
            {blogData.description.split('.').reduce((acc, sentence, index) => {
              const paragraphIndex = Math.floor(index / 6);
              if (!acc[paragraphIndex]) {
                acc[paragraphIndex] = '';
              }
              acc[paragraphIndex] += sentence.trim() + '. ';
              return acc;
            }, []).map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {index === 0 ? (
                  <>
                    <span className="first-letter">{paragraph.trim().charAt(0)}</span>
                    {paragraph.trim().slice(1)}
                  </>
                ) : (
                  paragraph.trim()
                )}
              </p>
            ))}
          </div>

        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-700 mb-6" />

      <div className='w-full flex flex-wrap justify-center max-w-screen-xl mx-auto mb-6'>
        <div className='flex flex-col flex-1'>
          <h1 className='text-lg w-full font-bold text-gray-900 dark:text-white text-center mb-4 lg:mb-8 mt-6'>
            Recent Comments
          </h1>
          <div>
            <CommentSection />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-2 max-w-3xl mb-4 md:px-8 px-4'>
          <h1 className='text-lg font-bold text-gray-900 dark:text-white mb-1 mt-6'>Related Blogs</h1>
          <div className='flex flex-col gap-4 lg:gap-2 justify-center mx-auto mb-6'>
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} blog={post} />
            ))}
          </div>
        </div>
      </div>

      {/*CommentModal  */}
      {isModalOpen && <CommentModal blogData={blogData} closeModal={closeModal} />}
    </div>
  );
}







