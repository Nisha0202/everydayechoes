"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For navigation
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiLoader3Fill } from 'react-icons/ri';
import TiptapEditor from '@/components/tiptap/Tiptap';

const NewBlogForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const [resetEditor, setResetEditor] = useState(false);

  // Check for auth token in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // If no token, redirect to the login page
      router.push('/login');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!title || !image || !description) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    const newBlogData = {
      title,
      image,
      description,
      // No need to include date or like in the request
    };

    try {
      // Replace the API endpoint with your backend
      const response = await fetch('https://everydayechoes.vercel.app/api/createblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlogData),
      });

      if (response.ok) {
        toast.success(`Great! Blog Uploaded.`);
        // Clear form and redirect to home page or blog list page
        setTitle('');
        setImage('');
        setDescription('');
        setResetEditor(true);
        // Redirect to home page or blog list page
      } else {
        setErrorMessage('Failed to submit the blog.');
      }
      setLoading(false);
    } catch (error) {
      console.error('Failed to submit blog:', error);
      setErrorMessage('An error occurred. Please try again.');
      setLoading(false);
    }
  };


  return (
    <div className="mx-auto p-6 lg:p-8 bg-gray-100 dark:bg-gray-800 rounded-md lg:w-[680px] mb-5 min-w-80">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="relative mb-4 mt-6">
          <input
            id="title"
            type="text"
            className="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder=" "
            required
          />
          <label
            htmlFor="title"
            className="absolute text-xs left-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 
            scale-75 top-2 z-10 origin-[0] bg-transparent peer-focus:bg-gray-100 dark:peer-focus:bg-gray-800 px-0 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Blog Title
          </label>
        </div>

        {/* Image URL Input */}
        <div className="relative mb-4 mt-4">
          <input
            id="image"
            type="text"
            className="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300
             dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder=" "
            required
          />
          <label
            htmlFor="image"
            className="absolute text-xs left-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 
            top-2 z-10 origin-[0] bg-transparent peer-focus:bg-gray-100 dark:peer-focus:bg-gray-800 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Image URL
          </label>
        </div>


        {/* Description Textarea */}
        <div className=" mb-4 mt-4">

          <label
            htmlFor="description"
            className="pb-4 text-sm text-gray-500 dark:text-gray-400bg-transparent "
          >
            Blog Description
          </label>
          <TiptapEditor value={description} onChange={(value) => setDescription(value)} reset={resetEditor} className="border"/>
      
        </div>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="border-2 border-gray-300  dark:border-gray-600  rounded px-2 py-1 text-blue-500 hover:text-blue-600 text-sm mt-2 transition-colors font-bold"
        >
          {loading ? (
            <span className="flex items-center justify-start ">
              <RiLoader3Fill className="animate-spin text-2xl" />
            </span>
          ) : (
            <span>Create Blog</span>
          )}


        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewBlogForm;
