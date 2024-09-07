import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';



const CommentSection = ({ blogData, refetchComments }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/comment?blogId=${blogData._id}`);
        setComments(response.data.comments);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch comments:', error);
        setErrorMessage('Failed to load comments.');
        setLoading(false);
      }
    };

    fetchComments();
  }, [blogData._id, refetchComments]);

  if (loading) return <p className='mx-auto text-sm'>Loading comments...</p>;

  if (errorMessage) return <p className="text-red-500 mx-2 text-sm">{errorMessage}</p>;

  return (
    <section className="p-6 mx-auto bg-white dark:bg-gray-900">
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className='text-sm'>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              <div className='flex flex-wrap gap-2 justify-between items-center'>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{comment.username}</div>
                <div className='text-xs text-gray-500 dark:text-gray-400'>{comment.createdAt ? format(new Date(comment.createdAt), 'dd MMMM yyyy') : 'Date not available'}</div>
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{comment.comment}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CommentSection;
