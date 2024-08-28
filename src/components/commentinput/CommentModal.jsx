"use client"

import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
const CommentModal = ({ blogData, closeModal }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the comment submission here (e.g., send to server)
    console.log(`Comment by:`, comment);
    closeModal(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="relative p-8 bg-gray-100 dark:bg-gray-700 w-full max-w-md m-auto flex-col flex rounded-md">
        <span className="absolute top-0 right-0 p-4">
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
          <IoCloseCircleOutline className='text-xl'/>
          </button>
        </span>
        <h1 className=" mb-4">Comment on {blogData.title}</h1>
        <p className="text-lg mb-4"></p>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment here..."
          className="border border-gray-300 p-2 w-full rounded-lg"
          rows="4"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white mt-4 px-4 py-2 rounded-md text-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentModal;


// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// let isConnected = false;

// const uri = `mongodb+srv://Admin:Admin0202@cluster0.5cua0xk.mongodb.net/sweetshare?retryWrites=true&w=majority&appName=Cluster0`;

// export const connect = async () => {
//   mongoose.set('strictQuery', true);

//   if (isConnected) {
//     console.log('MongoDB is already connected');
//     return;
//   }

//   try {
//     await mongoose.connect(uri);

//     isConnected = true;
//     console.log('Successfully connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };