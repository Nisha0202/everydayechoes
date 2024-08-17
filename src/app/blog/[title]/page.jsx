import Image from 'next/image'
import React from 'react'

// export default function BlogTitle() {
//   return (
//     <section className='bg-white dark:bg-gray-900'>
//       <div className='flex gap-12 mx-auto max-w-screen-xl mb-8 border-4 py-4'>

//         <div className=''>
//           <button>back</button>
//           <div className='w-1/3'>
//             <img
//               src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               className='max-h-80 max-w-80'
//               alt="blog-title"
//             />
//           </div>
// <div className='flex gap-6'>
//  <button>like</button>
//           <button>write comment</button>
// </div>
//          <div className='border-2 p-4 mb-4'>
//           <h1 className='font-bold mb-4'>A reader</h1>
//           <p>Very good</p>
//          </div>
//          <div className='border-2 p-4 mb-4'>
//           <h1 className='font-bold mb-4'>A reader</h1>
//           <p>Very good</p>
//          </div>

//         </div>
//         <div>
//           <h1 className='font-bold text-4xl'>Blog title</h1>
//           <h1 className='font-light text-sm'>publish date</h1>
//           <p>Every day unfolds with its own rhythm, a blend of routine and spontaneity that makes life both predictable and exciting. My mornings usually start with the comforting aroma of freshly brewed coffee, a quiet moment where I gather my thoughts and plan the day ahead. The early hours are often dedicated to tasks that require focus, like studying or working on projects, as this is when I feel most productive. The hum of the city gradually builds as the day progresses, a reminder of the world moving around me.

//            <br/> By midday, the routine shifts slightly, usually with a break to grab lunch and maybe a walk to clear my mind. The afternoon is a time for meetings, catching up on messages, and diving back into work. It’s a balance between being productive and ensuring I don’t burn out.

//             Evenings are a welcome change of pace. They’re often spent with friends or family, sharing stories of the day over dinner. This is also when I indulge in hobbies, whether it's reading a book, exploring new music, or sometimes just watching a show to unwind. It’s a time to disconnect from the hustle and reconnect with the things that bring joy and relaxation.

//             As night falls, I take a moment to reflect on the day, noting the small victories and lessons learned. Before bed, I often jot down thoughts in a journal, a habit that helps me stay grounded and appreciate the simple, everyday moments that make life meaningful. Each day might seem ordinary, but it’s these ordinary moments that weave together the fabric of a fulfilling life.</p>
//         </div>


//       </div>






//     </section>
//   )
// }



import { FaArrowLeft, FaComment, FaHeart } from 'react-icons/fa6';




export default function BlogTitle() {
  return (
    <section className="blog-title-container py-4 px-4">
    <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-start border-2 gap-4 lg:gap-8">

<div>
  <div>
<div className="blog-details flex flex-col ">
          <h1 className="text-4xl font-bold leading-tight">Blog Title</h1>
          <p className="text-gray-500 text-sm pb-4">Published on: Publish Date</p>
        </div>
</div>

<div className='w-full'>
          <div className="featured-image w-full h-44 md:h-64 relative">
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D"
              alt="Blog Title"
              layout="fill"
              objectFit="cover"
              className="w-full rounded-md"
            />
          </div>
          <div className="actions flex gap-4 justify-end py-4">
            <button className="flex items-center text-gray-500 hover:text-gray-700">
              <FaHeart className="mr-2" />
              Like
            </button>
            <button className="flex items-center text-gray-500 hover:text-gray-700">
              <FaComment className="mr-2" />
              Comment
            </button>
          </div>
<div>
  </div>


</div>


</div>

<div>
  <div>

Here's a 300-word dummy text about daily life:

Every day unfolds with its own rhythm, a blend of routine and spontaneity that makes life both predictable and exciting. My mornings usually start with the comforting aroma of freshly brewed coffee, a quiet moment where I gather my thoughts and plan the day ahead. The early hours are often dedicated to tasks that require focus, like studying or working on projects, as this is when I feel most productive. The hum of the city gradually builds as the day progresses, a reminder of the world moving around me.

By midday, the routine shifts slightly, usually with a break to grab lunch and maybe a walk to clear my mind. The afternoon is a time for meetings, catching up on messages, and diving back into work. It’s a balance between being productive and ensuring I don’t burn out.<br/>

Evenings are a welcome change of pace. They’re often spent with friends or family, sharing stories of the day over dinner. This is also when I indulge in hobbies, whether it's reading a book, exploring new music, or sometimes just watching a show to unwind. It’s a time to disconnect from the hustle and reconnect with the things that bring joy and relaxation.

As night falls, I take a moment to reflect on the day, noting the small victories and lessons learned. Before bed, I often jot down thoughts in a journal, a habit that helps me stay grounded and appreciate the simple, everyday moments that make life meaningful. Each day might seem ordinary, but it’s these ordinary moments that weave together the fabric of a fulfilling life.
  </div>


  <div className="comments max-w-64">
        <div className="comment border-2 p-4 rounded-lg mb-4">
               <h1 className="font-bold mb-2">A reader</h1>
              <p>Very good</p>
             </div>
          </div>
</div>








       
       
       
       
       
       
        </div>

    











     </section>
  )
}




// export default function BlogTitle() {
//   return (
//     <section className="blog-title-container py-4 px-4">
//       <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-start">
       
//         <div className="blog-details flex flex-col gap-2 md:col-span-2">
//           <h1 className="text-4xl font-bold leading-tight">Blog Title</h1>
//           <p className="text-gray-500 text-sm">Published on: Publish Date</p>
//         </div>

//       </div>
//       <div className="container mx-auto max-w-screen-xl py-8  grid grid-cols-1 md:grid-cols-2 gap-12">
//         <div className='w-full'>
//           <div className="featured-image w-full h-44 md:h-64 relative">
//             <Image
//               src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D"
//               alt="Blog Title"
//               layout="fill"
//               objectFit="cover"
//               className="w-full rounded-lg"
//             />
//           </div>
//           <div className="actions flex gap-4 justify-end py-4">
//             <button className="flex items-center text-gray-500 hover:text-gray-700">
//               <FaHeart className="mr-2" />
//               Like
//             </button>
//             <button className="flex items-center text-gray-500 hover:text-gray-700">
//               <FaComment className="mr-2" />
//               Comment
//             </button>
//           </div>
//         </div>

//         <div className="blog-content flex flex-col gap-4">
//           <article className="text-gray-700 leading-relaxed">
//             <p>
//             Every day unfolds with its own rhythm, a blend of routine and spontaneity that makes life both predictable and exciting. My mornings usually start with the comforting aroma of freshly brewed coffee, a quiet moment where I gather my thoughts and plan the day ahead. The early hours are often dedicated to tasks that require focus, like studying or working on projects, as this is when I feel most productive. The hum of the city gradually builds as the day progresses, a reminder of the world moving around me.

// By midday, the routine shifts slightly, usually with a break to grab lunch and maybe a walk to clear my mind. The afternoon is a time for meetings, catching up on messages, and diving back into work. It’s a balance between being productive and ensuring I don’t burn out.<br/>

// Evenings are a welcome change of pace. They’re often spent with friends or family, sharing stories of the day over dinner. This is also when I indulge in hobbies, whether it's reading a book, exploring new music, or sometimes just watching a show to unwind. It’s a time to disconnect from the hustle and reconnect with the things that bring joy and relaxation.

// As night falls, I take a moment to reflect on the day, noting the small victories and lessons learned. Before bed, I often jot down thoughts in a journal, a habit that helps me stay grounded and appreciate the simple, everyday moments that make life meaningful. Each day might seem ordinary, but it’s these ordinary moments that weave together the fabric of a fulfilling life.
           
           
//             </p>
//           </article>
//           <div className="comments mt-8 max-w-64">
//             <div className="comment border-2 p-4 rounded-lg mb-4">
//               <h1 className="font-bold mb-2">A reader</h1>
//               <p>Very good</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }