import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log('NOOO');
  try {
    const db  = await connectDB();
    if (!db) {
      throw new Error('Database connection failed');
    }
    console.log('Database connected:', db);
  
    const blogCount = await db.collection('blog').countDocuments();
  
    // Return the response in Next.js format
    return NextResponse.json({ count: blogCount }, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog count:', error);
    return NextResponse.json({ error: 'Failed to fetch blog count' }, { status: 500 });
  }
}
