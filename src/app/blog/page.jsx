import React from 'react'
import BlogCard from '@/components/card/BlogCard';
import Link from 'next/link';



const blogs = [
  {
    id: 1,
    title: 'A Day in the Life of a Computer Science Student',
    date: '13 August 2024',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Today was all about debugging my code and solving challenging problems in algorithms class...',
    link: '#',
  },
  {
    id: 2,
    title: 'How I Stay on Top of My Studies',
    date: '12 August 2024',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Staying organized is key. Here are my tips for managing coursework, projects, and prepping for exams as a computer science student.' ,         
    link: '#',
  },
  {
    id: 3,
    title: 'Balancing Studies and Social Life',
    date: '10 August 2024',
    image: 'https://images.unsplash.com/photo-1604882406305-67a5b1376126?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Finding the right balance between studies and hanging out with friends can be tricky, but here’s how I manage...',
    link: '#',
  },

];



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
