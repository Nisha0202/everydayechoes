// pages/api/createblog.js
import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/config/db";


import nodemailer from 'nodemailer';

// Create a transporter for sending emails using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_API,
  },
});

// Function to send email notifications
async function sendEmailNotification(users, blogId, title) {
  const blogLink = `https://everydayechoes.vercel.app/blog/${blogId}`;



  // Send emails to all users
for (const user of users) {
  const mailOptions = {
   
    from: process.env.GMAIL_USER,
    // to: user.email, // Send email to each user
    to: 'nishajabatunnessa@gmail.com',
    subject: '🚀 New Blog Posted on Everyday Echoes!',

    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <h2 style="color: #333333;">📢 New Blog Alert!</h2>
          <p style="color: #555555; font-size: 16px;">Hey there,</p>
          <p style="color: #555555; font-size: 16px;">
            A new blog titled <strong style="color: #16a34a;">"${title}"</strong> has just been posted on Everyday Echoes.
          </p>
          <a href="${blogLink}" style="display: inline-block; padding: 12px 24px; background-color: #16a34a; color: white; text-decoration: none; border-radius: 4px; margin-top: 20px;">
            Read Now
          </a>
          <p style="color: #888888; font-size: 14px; margin-top: 20px;">
            Stay tuned for more updates and exciting blogs!
          </p>
        </div>
      </div>
    `
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}

}

export async function POST(req) {
  try {
    const { title, image, description } = await req.json(); // Parse the incoming request body

    // Basic validation
    if (!title || !image || !description) {
      return NextResponse.json({ message: 'Please fill in all the fields.' }, { status: 400 });
    }

    // Connect to MongoDB
    const db = await connectDB();
    const blogCollection = db.collection('blog');
    const usersCollection = db.collection('users'); // Assuming you have a 'users' collection

    // Create a new blog entry
    const newBlog = {
      title,
      date: new Date().toISOString(), // Automatically set the current date
      image,
      description,
      like: 0, // Default like count
    };

    const result = await blogCollection.insertOne(newBlog);
    const blogId = result.insertedId; // Get the ID of the newly created blog

    // Fetch all users except for the one with the email 'admin989@gmail.com'
    const users = await usersCollection.find({ email: { $ne: 'admin989@gmail.com' } }).toArray();

    // Send email notifications to all remaining users
    await sendEmailNotification(users, blogId, title);

    return NextResponse.json({ message: 'Blog created successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Failed to create blog:', error.message); // Log error message for better debugging
    return NextResponse.json({ message: 'An error occurred. Please try again.' }, { status: 500 });
  }
}



