import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(req) {
    try {
      const { title, isLiked } = await req.json(); // Accept both title and isLiked from the request body
    //  console.log('Title received:', title);
    //  console.log('IsLiked received:', isLiked);
  
      if (!title) {
        return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
      }
  
      const db = await connectDB();
      const collection = db.collection('blog');
  
      const blogId = new ObjectId(title);
  
      const blog = await collection.findOne({ _id: blogId });
  
      if (!blog) {
    //    console.log('Blog post not found for ID:', title);
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }
  
      // Update the like count based on whether it's being liked or unliked
      const newLikeCount = isLiked ? (blog.like || 0) - 1 : (blog.like || 0) + 1;
  
      // Ensure that like count doesn't go below 0
      const updatedLikeCount = Math.max(0, newLikeCount);
  
      const result = await collection.updateOne(
        { _id: blogId },
        { $set: { like: updatedLikeCount } }
      );
  
      if (result.modifiedCount === 0) {
        return NextResponse.json({ error: 'Failed to update like count' }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'Like count updated', like: updatedLikeCount }, { status: 200 });
    } catch (error) {
      console.error('Failed to update like count:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }