
import React from 'react';

const BlogCardSkeleton = () => {
  return (
    <div className="p-6 md:p-10 animate-pulse">
      <div className="mb-4" style={{ position: 'relative', width: '100%', height: '200px' }}>
        <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-full w-full"></div>
      </div>
      <div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-1/4"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-full"></div>
        <div className="flex items-center">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;

