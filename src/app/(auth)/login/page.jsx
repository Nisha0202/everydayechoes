"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { RiLoader3Fill } from "react-icons/ri";
import { TbArrowRight } from 'react-icons/tb';
import { FaCheck } from 'react-icons/fa6';
import { FaArrowAltCircleRight } from 'react-icons/fa';
 
const Login = () => {

  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleClick = () => {
    setLoading(true); // Show the loader
    setSubscribed(false); // Ensure "Subscribed" is not shown yet

    setTimeout(() => {
      setLoading(false); // Hide the loader
      setSubscribed(true); 
    }, 1000); // 1 seconds
  };
  
  return (
    <section className="">
      <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Subscribe Today
          </h1>
          <p className="lg:mb-6 mb-4 font-light text-gray-500  dark:text-gray-400">
            If you're interested in following the daily life of a female student navigating her way through studies, experiences,
            and the little moments that make life special, subscribe to Everyday Echoes.
          </p>
          <Link
            href="/about"
            className="text-blue-600 dark:text-blue-500 font-medium inline-flex items-center"
          >
            More about Everyday Echoes
            <TbArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" />
          </Link>
        </div>
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-gray-100 rounded-md dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white ">Everyday Echoes</h2>
            <form className="mt-8 space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>

{/*                          
              <button
                type="submit"
                className="w-full text-center text-white rounded-md bg-blue-700 py-2 px-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Subscribe
              </button> */}

<button
      type="button"
      onClick={handleClick}
      className="w-full text-center text-white rounded-md bg-blue-700 py-2 px-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
    >
      {loading && (
        <span className="flex items-center justify-center">
          <button type='button' className="btn rounded-md font-bold">
                        <RiLoader3Fill className="animate-spin text-xl" />
                    </button>
        </span>
      )}
      {subscribed ? (
        <span className="flex items-center justify-center">
          <FaCheck className="mr-2 text-white" /> Subscribed
        </span>
      ) : (
        !loading && <span>Subscribe</span>
      )}
    </button>

       






            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
