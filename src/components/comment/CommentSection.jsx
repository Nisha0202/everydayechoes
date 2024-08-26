import React from 'react';

const CommentSection = () => {
  return (
    <section className="p-6 mx-auto bg-white dark:bg-gray-900">
  
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">Anonymous</div>
          <p className="mt-2 text-gray-700 dark:text-gray-300">This is an example comment.</p>
        </div>
        {/* Add more comment items here */}
      </div>
    </section>
  );
};

export default CommentSection;
