"use client"

import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { jwtDecode } from "jwt-decode";
import axios from 'axios'; 
import { RiLoader3Fill } from "react-icons/ri"; // For the loading spinner
import { FaCheck } from "react-icons/fa"; // For the success checkmark

const CommentModal = ({ blogData, closeModal }) => {
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // To track loading state
  const [success, setSuccess] = useState(false); // To track success state

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    setErrorMessage(''); // Clear error message when user types
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Get the username from authToken stored in localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      setErrorMessage('Please log in to comment.');
      return;
    }

    // Decode the JWT
    const decodedToken = jwtDecode(authToken);
    const username = decodedToken.name; 

    // Ensure comment is not empty
    if (comment.trim() === '') {
      setErrorMessage('Comment cannot be empty.');
      return;
    }

     // Set loading to true while posting the comment

    try {
      // Send the comment to the server
      const commentData = {
        blogId: blogData._id,
        username: username,
        comment: comment,
      };

      await axios.post('http://localhost:3000/api/comment', commentData); // Adjust the API route to your setup

      // Clear the comment after submission and show success state
      setComment('');
      setSuccess(true); // Show success state

      // Close the modal after 1 second
      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      console.error('Failed to post comment:', error);
      setErrorMessage('Failed to post comment. Please try again.');
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-400 bg-opacity-30 flex">
      <div className="relative p-8 bg-gray-100 dark:bg-gray-700 w-full max-w-md m-auto flex-col flex rounded-md">
        <span className="absolute top-0 right-0 p-4">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <IoCloseCircleOutline className="text-xl" />
          </button>
        </span>
        <h1 className="text-sm font-light mb-4">
          Comment on {blogData.title}
        </h1>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment here..."
          className="border border-gray-300 p-2 w-full rounded-lg"
          rows="4"
          required
          disabled={loading || success} // Disable input when loading or after success
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        <button
          onClick={handleSubmit}
          className={`flex items-center justify-center bg-blue-600 font-medium text-white mt-4 px-4 py-2 rounded text-sm w-full
            ${loading || success || comment.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading || success || comment.trim() === ''} // Disable button if comment is empty or loading/success
        >
          {loading ? (
            <RiLoader3Fill className="animate-spin text-xl" />
          ) : success ? (
            <span><FaCheck className="mr-2 text-white inline" /> Post</span>
          ) : (
            'Post'
          )}
        </button>
      </div>
    </div>
  );
};

export default CommentModal;
