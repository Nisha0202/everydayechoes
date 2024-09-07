import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { blogId, username, comment } = await req.json();

    // Validate the required fields
    if (!blogId || !username || !comment) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Connect to the database
    const db = await connectDB();
    const commentsCollection = db.collection('comments');

    // Create a new comment object
    const newComment = {
      blogId: new ObjectId(blogId), // blogId is a MongoDB ObjectId
      username,
      comment,
      createdAt: new Date(), // Add timestamp
    };

    // Insert the comment into the database
    const result = await commentsCollection.insertOne(newComment);

    // Return a success response with the inserted comment ID
    return NextResponse.json({
      message: 'Comment added successfully',
      commentId: result.insertedId,
    });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

