import { connectDB } from "@/lib/config/db";

export async function GET(req) {
  try {
    const { db } = await connectDB(); // Ensure connectDB returns the 'db' object
    console.log('Database connected:', db);
  
    const blogCount = await db.collection('blog').countDocuments({});
  
    // Return the response in Next.js format
    return new Response(JSON.stringify({ count: blogCount }), { status: 200 });
  } catch (error) {
    console.error('Error fetching blog count:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch blog count' }), { status: 500 });
  }
}