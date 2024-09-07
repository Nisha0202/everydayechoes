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

    // Extract pagination parameters from the query
    const url = new URL(req.url, `http://${req.headers.host}`);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '3', 10);
    const skip = (page - 1) * limit;

    // Fetch the total count of blogs to calculate total pages
    const totalBlogs = await collection.countDocuments({});

    // Fetch blogs with pagination
    const blogs = await collection.find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    // Convert date strings to Date objects and sort the blogs
    const sortedBlogs = blogs
      .map(blog => ({
        ...blog,
        date: parseDate(blog.date) //'date' is the field with date strings
      }))
      .sort((a, b) => b.date - a.date); // Sort from newest to oldest


    // Include pagination info in the response
    return NextResponse.json({
      blogs: sortedBlogs,
      pagination: {
        totalBlogs,
        totalPages: Math.ceil(totalBlogs / limit),
        currentPage: page,
        perPage: limit
      }
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}




