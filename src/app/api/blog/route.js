import { connectDB } from "@/lib/config/db";
const {NextResponse} = require("next/server");


const parseDate = (dateStr) => {
  // Convert date string in the format "14 August 2024" to a Date object
  return new Date(dateStr.split(' ').reverse().join('-')); // "2024-08-14"
};

export async function GET(req) {
  try {
    const db = await connectDB();
    const collection = db.collection('blog'); // Select your collection here
    const blogs = await collection.find({}).toArray(); // Fetch all blogs

    // Convert date strings to Date objects and sort the blogs
    const sortedBlogs = blogs
      .map(blog => ({
        ...blog,
        date: parseDate(blog.date) // Assuming 'date' is the field with date strings
      }))
      .sort((a, b) => b.date - a.date) // Sort from newest to oldest

    return NextResponse.json(sortedBlogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}




