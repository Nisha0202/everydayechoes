"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { FaArrowLeft, FaComment, FaHeart } from 'react-icons/fa6';
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

export default function BlogTitle({ params }) {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    console.log("Params:", params.title); //  title :  "1"
  
  
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
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blogData) {
    return <p>No blog post found.</p>;
  }

  return (
    <div>
      <div className='w-screen md:h-44 h-36 bg-gray-400 dark:bg-gray-600 grid place-content-center relative'>
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
              layout="fill"
              objectFit="cover"
              className="md:rounded-md border-2 border-gray-300 dark:border-gray-800"
            />
          </div>
        </div>
      </div>

      <div className='mx-auto text-center max-w-2xl'>
        <div className='mt-28 max-w-xl mx-auto'>
          <div className="actions w-full flex items-center justify-between text-gray-600 dark:text-gray-300 text-sm px-2">
            <button className="flex items-center">
              <FaRegHeart className="mr-1 text-base" />
              Like
            </button>
            <button className="flex items-center">
              <FaRegCommentAlt className="mr-1" />
              Comment
            </button>
          </div>

          <div className="blog-post text-start px-2 py-6 max-w-4xl mx-auto text-gray-900 dark:text-gray-200 text-sm">
            {blogData.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// "use client"
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'


// import { FaArrowLeft, FaComment, FaHeart } from 'react-icons/fa6';
// import { FaRegHeart } from "react-icons/fa";
// import { FaRegCommentAlt } from "react-icons/fa";

// export default function BlogTitle({params}) {
//   const [blogData, setBlogData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
// console.log(params.id);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetchData('/blogs.json')
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setBlogData(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [params.id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!blogData) {
//     return <p>No blog post found.</p>;
//   }



//   return (

//     <div>
//     <div className='w-screen md:h-44 h-36 bg-gray-400 dark:bg-gray-600 grid place-content-center relative'>
//       <h1 className='text-center text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white'>
//         {blogData.title}
//       </h1>
//       <p className='text-center font-light text-xs md:mt-2 mt-1'>
//         {blogData.date}
//       </p>

//       <div className='w-full mx-auto absolute md:-bottom-24 -bottom-24 flex justify-center'>
//         <div className="featured-image w-full max-w-xl md:h-32 h-28 mx-auto relative">
//           <Image
//             src={blogData.image}
//             alt={blogData.title}
//             layout="fill"
//             objectFit="cover"
//             className="md:rounded-md border-2 border-gray-300 dark:border-gray-800"
//           />
//         </div>
//       </div>
//     </div>

//     <div className='mx-auto text-center max-w-2xl'>
//       <div className='mt-28 max-w-xl mx-auto'>
//         <div className="actions w-full flex items-center justify-between text-gray-600 dark:text-gray-300 text-sm px-2">
//           <button className="flex items-center">
//             <FaRegHeart className="mr-1 text-base" />
//             Like
//           </button>
//           <button className="flex items-center">
//             <FaRegCommentAlt className="mr-1" />
//             Comment
//           </button>
//         </div>

//         <div className="blog-post text-start px-2 py-6 max-w-4xl mx-auto text-gray-900 dark:text-gray-200 text-sm">
//           {blogData.description.split('\n').map((paragraph, index) => (
//             <p key={index} className="mb-4 leading-relaxed">
//               {paragraph}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>

//         )}












//     // <div>

//     //   <div className='w-screen md:h-44 h-36  bg-gray-400 dark:bg-gray-600 grid place-content-center relative'>
//     //     <h1 className='text-center text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white'>A hyperlink points to a whole document</h1>
//     //     <p className='text-center font-light text-xs md:mt-2 mt-1'>Published Date</p>

//     //     <div className='w-full  mx-auto absolute md:-bottom-24 -bottom-24 flex justify-center'>
//     //       <div className="featured-image w-full max-w-xl md:h-32 h-28 mx-auto  relative">
//     //         <Image
//     //           src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D"
//     //           alt="Blog Title"
//     //           layout="fill"
//     //           objectFit="cover"
//     //           className="md:rounded-md border-2 border-gray-300 dark:border-gray-800"
//     //         />
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className='mx-auto text-center max-w-2xl'>
//     //     <div className='mt-28 max-w-xl mx-auto'>
//     //       <div className="actions w-full flex items-center justify-between text-gray-600 dark:text-gray-300  text-sm px-2 ">
//     //         <button className="flex items-center">
//     //           <FaRegHeart className="mr-1 text-base" />
//     //           Like
//     //         </button>
//     //         <button className="flex items-center ">
//     //           <FaRegCommentAlt className="mr-1" />
//     //           Comment
//     //         </button>
//     //       </div>
//     //       <div className="blog-post text-start px-2 py-6 max-w-4xl mx-auto text-gray-900 dark:text-gray-200 text-sm">
//     //         <p className="mb-4 leading-relaxed">
//     //           As a Computer Science student, one of the exciting aspects of the journey is delving into various programming languages and frameworks. For those who have an interest in web development, learning JSX (JavaScript XML) is a significant milestone. JSX is a syntax extension for JavaScript that allows you to write HTML directly within React, a popular front-end library. Here’s a look into a day in the life of a Computer Science student who is mastering JSX.
//     //         </p>

//     //         <h2 className="text-xl font-semibold mb-3 dark:text-gray-100">
//     //           Morning: Diving into the World of JSX
//     //         </h2>
//     //         <p className="mb-4 leading-relaxed">
//     //           The day often begins with a cup of coffee and a laptop booted up, ready to code. The morning session is dedicated to getting familiar with JSX. This involves reading through documentation, watching tutorials, and writing some basic code snippets to understand how JSX works. One of the first tasks is to convert traditional HTML components into JSX format. The student learns how JSX makes the code more readable and easier to manage by keeping HTML and JavaScript closely integrated.
//     //         </p>

//     //         <h2 className="text-xl font-semibold mb-3 dark:text-gray-100">
//     //           Mid-Morning: Hands-on Practice with React and JSX
//     //         </h2>
//     //         <p className="mb-4 leading-relaxed">
//     //           By mid-morning, it’s time to attend a class or a coding lab that focuses on React. The professor explains how JSX fits into the larger React ecosystem, making it easier to create and manage UI components. The student practices creating simple components, such as buttons and forms, using JSX. They experiment with embedding expressions within JSX to make the UI dynamic, like displaying user names or updating content based on user input.
//     //         </p>

//     //         <h2 className="text-xl font-semibold mb-3 dark:text-gray-100">
//     //           Afternoon: Building a Small React Project
//     //         </h2>
//     //         <p className="mb-4 leading-relaxed">
//     //           In the afternoon, the student decides to apply what they’ve learned by working on a small project. They might choose to build a simple to-do list app or a personal portfolio site. Using JSX, the student creates reusable components, such as a header, footer, and list items. As they build, they appreciate how JSX allows them to write clean and modular code, making it easier to manage and debug.
//     //         </p>
//     //         <p className="mb-4 leading-relaxed">
//     //           The student also learns how JSX can work seamlessly with other React features, such as props and state. For instance, they pass data from one component to another through props and manage the state of their application to update the UI dynamically. These hands-on experiences reinforce the concepts learned earlier in the day.
//     //         </p>

//     //         <h2 className="text-xl font-semibold mb-3 dark:text-gray-100">
//     //           Evening: Wrapping Up the Day
//     //         </h2>
//     //         <p className="mb-4 leading-relaxed">
//     //           As the day winds down, the student reviews what they’ve learned about JSX and React. They might spend some time reading additional resources or experimenting with more advanced JSX features. The day ends with a sense of accomplishment, having gained a deeper understanding of how JSX simplifies the process of building dynamic user interfaces in React.
//     //         </p>
//     //         <p className="leading-relaxed">
//     //           In conclusion, a day in the life of a Computer Science student learning JSX is filled with exploration, hands-on practice, and continuous learning. Each day brings new opportunities to master the tools and technologies that will shape their future career in web development.
//     //         </p>
//     //       </div>

//     //     </div>
//     //   </div>




//     // </div>
//   )
// }




