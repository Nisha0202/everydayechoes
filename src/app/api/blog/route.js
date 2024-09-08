import { connectDB } from "@/lib/config/db";
const {NextResponse} = require("next/server");





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

    // Fetch blogs with pagination and sort them by date (newest first)
    const blogs = await collection.find({})
      .sort({ date: -1 }) // Sort by date in descending order (newest first)
      .skip(skip)
      .limit(limit)
      .toArray();

    // Include pagination info in the response
    return NextResponse.json({
      blogs,
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




