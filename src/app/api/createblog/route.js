// pages/api/blog.js
import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/config/db";

export async function POST(req) {
  try {
    const { title, image, description } = await req.json(); // Parse the incoming request body

    // Basic validation
    if (!title || !image || !description) {
      return NextResponse.json({ message: 'Please fill in all the fields.' }, { status: 400 });
    }

    // Connect to MongoDB
    const db = await connectDB();
    const collection = db.collection('blog');

    // Create a new blog entry
    const newBlog = {
      title,
      date: new Date().toISOString(), // Automatically set the current date
      image,
      description,
      like: 0, // Default like count
    };

    await collection.insertOne(newBlog);

    return NextResponse.json({ message: 'Blog created successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Failed to create blog:', error.message); // Log error message for better debugging
    return NextResponse.json({ message: 'An error occurred. Please try again.' }, { status: 500 });
  }
}


