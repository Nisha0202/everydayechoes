import React from 'react'


const blogs = [
  {
    id: 1,
    title: 'A Day in the Life of a Computer Science Student',
    date: 'August 13, 2024',
    image: 'https://via.placeholder.com/300',
    description: 'Today was all about debugging my code and solving challenging problems in algorithms class...',
    link: '#',
  },
  {
    id: 2,
    title: 'Balancing Studies and Social Life',
    date: 'August 12, 2024',
    image: 'https://via.placeholder.com/300',
    description: 'Finding the right balance between studies and hanging out with friends can be tricky, but here’s how I manage...',
    link: '#',
  },
  // Add more blog entries here
];

const BlogCard = ({ blog }) => (
  <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
    <img className="w-full h-48 object-cover" src={blog.image} alt={blog.title} />
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{blog.title}</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</span>
      </div>
      <p className="mt-3 text-gray-700 dark:text-gray-300">
        {blog.description}
      </p>
      <a
        href={blog.link}
        className="inline-block mt-4 text-blue-600 dark:text-blue-500 hover:underline"
      >
        Read More
      </a>
    </div>
  </div>
);

const BlogList = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">Latest Blog Posts</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
