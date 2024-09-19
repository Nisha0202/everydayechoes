import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log('NOOO');
  try {
    const db  = await connectDB();
    if (!db) {
      throw new Error('Database connection failed');
    }
 //   console.log('Database connected:', db);
  
  
    const currentDate = new Date();
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(currentDate.getDate() - 3);

    // Log the ISO string for debugging
    console.log('Date 3 days ago (ISO):', threeDaysAgo.toISOString());

    // Count documents with date greater than or equal to threeDaysAgo
    const blogCount = await db.collection('blog').countDocuments({
      date: { $gte: threeDaysAgo.toISOString() }
    });
 
    // Return the response in Next.js format
    return NextResponse.json({ count: blogCount }, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog count:', error);
    return NextResponse.json({ error: 'Failed to fetch blog count' }, { status: 500 });
  }
}
