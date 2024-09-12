"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaRegCommentAlt, FaArrowLeft } from "react-icons/fa";
import BlogCard from '@/components/card/BlogCard';
import CommentSection from '@/components/comment/CommentSection';
import CommentModal from '@/components/commentinput/CommentModal';
import { useRouter } from 'next/navigation'; 
import { IoIosArrowBack } from 'react-icons/io';
import { format } from 'date-fns';




// export async function generateMetadata({ params }) {
//   const title = params.title;
//   const res = await fetch(`http://localhost:3000/api/blog/${title}`);
//   const blog = await res.json();

//   return {
//     title: `${blog.title} - My Blog`,
    
//   };
// }


export default function BlogTitle({ params }) {


  const [blogData, setBlogData] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heading, setHeading] = useState("Everyday Echoes");

  const router = useRouter(); // Initialize router for navigation

  // console.log("params", params.title);

  const title = params.title; // Directly use params.title
   const fetchData = async () => {
      try {
        if (!title) return; // Avoid calling the API if title is not present

        const response = await fetch(`http://localhost:3000/api/blog/${title}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // console.log("data", data);

        setBlogData(data.blog || null);
        setRelatedPosts(data.relatedPosts || []);
        setHeading(data.title);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchData();
  }, [title]);


  const handleCommentClick = () => {
    setIsModalOpen(true);
  };


  const handleLikeClick = async () => {
    if (blogData) {
      const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || []; // Retrieve liked blogs from localStorage

      const isLiked = likedBlogs.includes(blogData._id); // Check if the blog is already liked

      let newLikeCount;

      if (isLiked) {
        // If blog is already liked, decrement the like count (unlike)
        newLikeCount = blogData.like - 1;
        setBlogData(prevData => ({
          ...prevData,
          like: newLikeCount
        }));

        // Remove blog from likedBlogs in local storage
        const updatedLikedBlogs = likedBlogs.filter(id => id !== blogData._id);
        localStorage.setItem('likedBlogs', JSON.stringify(updatedLikedBlogs));
      } else {
        // If blog is not liked, increment the like count
        newLikeCount = blogData.like + 1;
        setBlogData(prevData => ({
          ...prevData,
          like: newLikeCount
        }));

        // Add blog to likedBlogs in local storage
        likedBlogs.push(blogData._id);
        localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs));
      }

      // Send the updated like count and isLiked status to the server
      try {
        const response = await fetch('http://localhost:3000/api/blog/like', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: blogData._id, isLiked }) // Send title and isLiked in body
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        setBlogData(prevData => ({
          ...prevData,
          like: data.like
        }));
      } catch (error) {
        console.error('Failed to update like count:', error);

        // Revert like count if the server request fails
        setBlogData(prevData => ({
          ...prevData,
          like: isLiked ? prevData.like + 1 : prevData.like - 1
        }));
      }
    }
  };
  
  // refetching comments
  const closeModal = () => {
    setIsModalOpen(false);
    // Trigger refetch of comments
    fetchData();
  };

// going back
  const handleBackClick = () => {
    router.back(); // Use router to go back to the previous page
  };

  if (loading) {
    return <div className='w-full flex items-center justify-center my-4 '>Loading...</div>;
  }

  if (error) {
    return <div className='w-full flex items-center justify-center text-red-500 my-4'>Error: {error}</div>;
  }

  if (!blogData) {
    return <div className='w-full  flex items-center justify-center my-4 '>No blog post found.</div>;
  }


  return (
    <>
      <div className='w-full md:h-44 h-36 bg-gray-400 dark:bg-gray-600 grid place-content-center relative'>
         <title> Blog | Everyday Echoes</title>
    
        <h1 className='text-center text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white'>
          {blogData.title}
        </h1>
        <p className='text-center dark:font-light font-normal text-xs md:mt-2 mt-1'>
        {blogData.date ? format(new Date(blogData.date), 'dd MMMM yyyy') : 'Date not available'}
        </p>

        <div className='w-full mx-auto absolute md:-bottom-24 -bottom-24 flex justify-center'>
          <div className="featured-image w-full max-w-xl md:h-32 h-28 mx-auto relative">
            <Image
              src={blogData.image}
              alt={blogData.title}
              blurDataURL="data:..."
              placeholder="blur"
              fill
              style={{ objectFit: "cover" }}
              className="md:rounded-md border-2 border-gray-300 dark:border-gray-800"
            />
          </div>
        </div>
      </div>

      <div className='mx-auto text-center max-w-2xl '>
        <div className='mt-28 max-w-xl mx-auto'>

          <div className="actions w-full flex items-center justify-between text-gray-600 dark:text-gray-300 text-sm px-6">
            <button className="flex items-center text-xs" onClick={handleLikeClick}>
              <FaRegHeart className="mr-1 " />
              {blogData.like ?? 0}
            </button>

            <button className="flex items-center text-xs" onClick={handleCommentClick}>
              <FaRegCommentAlt className="mr-1" />
            </button>

          </div>
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
                    <span className="first-letter leading-tight pr-[1px]">{paragraph.trim().charAt(0)}</span>
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
            <CommentSection blogData={blogData} refetchComments={fetchData}/>
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

      {/* CommentModal */}
      {isModalOpen && <CommentModal blogData={blogData} closeModal={closeModal} />}



      {/* Floating Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed bottom-4 text-sm lg:text-base left-4 p-2 dark:bg-gray-700 bg-gray-300 hover:bg-gray-400 rounded-full shadow-lg dark:hover:bg-gray-800 focus:outline-none"
      >
        <IoIosArrowBack />
      </button>
    </>
  );
}
