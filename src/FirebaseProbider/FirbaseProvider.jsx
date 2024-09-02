"use client";


import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications

export const AuthContext = createContext(null);

export default function FirebaseProvider(props) {

  const googleProvider = new GoogleAuthProvider();
  const [usern, setUsern] = useState(null);
  const [ googleLoading, setLoading] = useState(false); // Optional: to manage loading state
  const [subscribed, setSubscribed] = useState(false); // Optional: to manage subscription state

  const googleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        setUsern(result.user);
        await saveUserToDatabase(result.user);
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error.message);
        toast.error('Error during Google sign-in.');
      });
  };

  const saveUserToDatabase = async (user) => {
     // Start loading
    try {
      const response = await fetch('http://localhost:3000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          otp: null,
          username: user.displayName || user.email.split('@')[0], // Fallback to email username if displayName is unavailable
          step: 3
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === 'Email already registered. Please log in.') {
          toast.error('Email already registered. Please log in.');
          return;
        }
        if (data.error === 'Invalid OTP') {
          toast.error('Invalid OTP! Please check your email correctly.');
          return;
        }
        toast.error('Something went wrong. Please try again.');
      } else if (data.message === 'Subscription successful') {
        setSubscribed(true);
        toast.success("You’re in! Excited to share some awesome vibes with you. 😊😉");
        const token = data.token;
        localStorage.setItem('authToken', token);
      }
    } catch (error) {
      console.error('Error saving user to the database:', error.message);
      toast.error('Failed to save user to the database.');
    } finally {
      setLoading(false); // End loading
    }
  };

  // Observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsern(user);
      } else {
        console.log("No user is signed in.");
      }
    });
  }, []);

  const allValues = {
    googleLogin,
    usern,
   googleLoading,
    subscribed,
  };

  return (
    <AuthContext.Provider value={allValues}>
      {props.children}
    </AuthContext.Provider>
  );
}

