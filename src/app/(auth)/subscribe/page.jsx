"use client";
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { RiLoader3Fill } from "react-icons/ri";
import { FaCheck } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '@/FirebaseProbider/FirbaseProvider';

const Subscribe = () => {
  const { googleLogin, googleLoading, googlesub } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "otp") setOTP(value);
    if (name === "name") setName(value);
  };

  const handleNextClick = async () => {
    if (step <= 3) {
      setLoading(true);
      try {
        const response = await fetch('https://everydayechoes.vercel.app/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, otp, name, step }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (data.error === 'Email already registered. Please log in.') {
            toast.error('Email already registered. Please log in.');
            setStep(1); // Reset the step to 1
            setLoading(false);
            return;
          }

          if (data.error === "Invalid OTP") {
            toast.error("Invalid OTP! Please Check Your Email Correctly.");
            setLoading(false);
            return;
          }

          toast.error("Something went wrong, Please try again.");
          setLoading(false);
          return;
        }

        if (step === 1 && data.message === "OTP sent") {
          setStep(2);
        } else if (step === 2 && data.message === "OTP verified") {
          setStep(3);
          setOTP('');   // Clear OTP field
        } else if (step === 3 && data.message === "Subscription successful") {
          setSubscribed(true);
          toast.success("You are in! Excited to share some awesome vibes with you. 😊😉");

          // Capture the JWT token
          const token = data.token;

          // Store the token in local storage or state (for example, localStorage)
          localStorage.setItem('authToken', token);

          // Clear input fields
          setEmail('');
          setOTP('');
          setName('');
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="">
      <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Subscribe Today
          </h1>
          <p className="lg:mb-6 mb-4 font-light text-gray-500 dark:text-gray-400">
            If you&apos;re interested in following the daily life of a female student navigating her way through studies, experiences,
            and the little moments that make life special, subscribe to Everyday Echoes.
          </p>
          <Link
            href="/about"
            className="text-blue-600 dark:text-blue-500 font-medium inline-flex items-center text-sm lg:text-base"
          >
            Learn more about Everyday Echoes
          </Link>
        </div>
        <div>
          <div className="w-full lg:max-w-xl lg:p-6  p-8 bg-gray-100 rounded-md dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white hidden lg:flex mb-6">Everyday Echoes</h2>
            <form className="space-y-6">
              {step === 1 && (
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              )}

              {step === 2 && (
                <div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Your OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    value={otp}
                    onChange={handleInputChange}
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your OTP"
                    required
                  />
                </div>
              )}

              {step === 3 && (
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleInputChange}
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    required
                  />
                </div>
              )}

              <button
                type="button"
                onClick={handleNextClick}
                className={`w-full text-center text-white font-semibold rounded-md py-2 text-sm px-4 focus:ring-2 ${step < 3
                  ? "bg-gray-500 hover:bg-gray-600 "
                  : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  }`}
                disabled={loading || googleLoading} // Disable button when loading
              >
                {(loading || googleLoading) && (
                  <span className="flex items-center justify-center w-full">
                    <RiLoader3Fill className="animate-spin text-xl" />
                  </span>
                )}

                {
                  (subscribed || googlesub) ? (
                    <span className="flex items-center justify-center w-full">
                      <FaCheck className="mr-2 text-white" /> Subscribed
                    </span>
                  ) : (
                    !loading && (
                      <span>
                        {googleLoading ? "" : (step < 3 ? "Next" : "Subscribe")}
                      </span>
                    )
                  )
                }
              </button>

              <div className="flex justify-between items-center mt-4">
                <Link href="/login" className="text-sm">
                  Already have subscribed? <span className="ms-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">Log In</span>
                </Link>
              </div>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="flex-shrink mx-4 text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              </div>

              <button
                type="button"
                className="w-full font-semibold text-sm px-4 lg:py-2 py-3 text-center rounded-md focus:ring-2 focus:ring-blue-200 flex items-center justify-center bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-900 dark:bg-gray-700"
                onClick={() => googleLogin()}
                disabled={googleLoading} // Disable button when loading
              >
                <FcGoogle className="mr-2 text-2xl" /> Subscribe with Google
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Subscribe;
