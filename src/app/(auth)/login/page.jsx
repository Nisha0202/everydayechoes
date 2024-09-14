"use client"
import Link from "next/link";
import React, { useContext, useEffect, useState } from 'react';
import { RiLoader3Fill } from "react-icons/ri";
import { FcGoogle } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '@/FirebaseProbider/FirbaseProvider';
import { FaCheck } from 'react-icons/fa';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const { authToken, login } = useAuth(); 
  const { googleUp, googleLoading, googlesub } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
 const router = useRouter();

   // Redirect to home if authToken exists
   useEffect(() => {

    if (authToken) {
      // If token is found, redirect to home
      router.push('/');   
    }
  }, [authToken]);

  // API URL
  const apiUrl = 'https://everydayechoes.vercel.app/api/login';

  const handleNextClick = async () => {
    if (step === 1 && email) {
      setLoading(true);
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, step: 1 }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Step 1 complete, moving to step 2');
          setStep(2); 
        } else {
          toast.error(data.error || 'Failed to send OTP');
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
        toast.error('Failed to send OTP');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleLoginClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, step: 2 }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful');
        // console.log(data);
        toast.success(`Hey ${data.username}, looking fabulous today!`);
        setSubscribed(true);
          // Clear input fields
          setEmail('');
          setOtp('');
          setStep(1);  
          const token = data.token;
          login(token);
         
        //   setTimeout(() => {
        //     router.push('/');
        //    localStorage.setItem('authToken', token);
          
        //  }, 1300); 

        // Capture the JWT token
      

        // localStorage.setItem('authToken', token);  
        
      } else {
        toast.error(data.error || "Invalid OTP");
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'otp') setOtp(value);
  };

  return (
    <section className="">
        <title> Login | Everyday Echoes</title>
      <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Log In
          </h1>
          <p className="lg:mb-6 mb-4 font-light text-gray-500 dark:text-gray-400">
            Access your Everyday Echoes account and stay updated with the latest blogs and stories.
          </p>
          <Link
            href="/about"
            className="text-blue-600 dark:text-blue-500 font-medium inline-flex items-center text-sm lg:text-base"
          >
            Learn more about Everyday Echoes
          </Link>
        </div>
        <div>
          <div className="w-full lg:max-w-xl lg:p-6 p-8 bg-gray-100 rounded-md dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white hidden lg:flex mb-6">Everyday Echoes Login</h2>
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
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleNextClick}
                    className={`w-full text-center text-white font-semibold rounded-md py-2 mt-6 text-sm px-4 focus:ring-2 ${step < 3
                      ? "bg-gray-500 hover:bg-gray-600 "
                      : "bg-gray-400 cursor-not-allowed"
                      }`}
                  >
                    {loading || googleLoading ? (
                      <span className="flex items-center justify-center w-full">
                        <RiLoader3Fill className="animate-spin text-xl" />
                      </span>
                    ) : !googlesub ? (
                      <span>Next</span> // Dont show "Next" if googlesub is true
                    ) : (
                      <span className="flex items-center justify-center w-full">
                        <FaCheck className="mr-2 text-white" /> Subscribed
                      </span>
                    )}
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    value={otp}
                    onChange={handleInputChange}
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123456"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleLoginClick}
                    className="mt-4 w-full text-center text-white font-semibold rounded-md py-2 text-sm px-4 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <RiLoader3Fill className="animate-spin text-xl" />
                      </span>
                    ) : (
                      <span>Log In</span>
                    )}
                  </button>
                </div>
              )}

              <div className="flex justify-between items-center mt-4">
                <Link href="/subscribe" className="text-sm">
                  Don&apos;t have an account? <span className="ms-1 font-medium text-blue-600
                   dark:text-blue-500 hover:underline">Subscribe Now</span>
                </Link>
              </div>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="flex-shrink mx-4 text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              </div>

              <button
                type="button"
                className="w-full font-semibold text-sm px-4 lg:py-2 py-3 text-center 
                 rounded-md focus:ring-2 focus:ring-blue-200 flex items-center justify-center
                  bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-900 dark:bg-gray-700"
                onClick={() => googleUp()}
              >
                <FcGoogle className="mr-2 text-2xl" /> Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
