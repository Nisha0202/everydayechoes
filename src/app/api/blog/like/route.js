import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(req) {
    try {
      const { title } = await req.json(); 
      console.log('Title received:', title);
  
      if (!title) {
        return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
      }
  
      const db = await connectDB();
      const collection = db.collection('blog');
  
      const blogId = new ObjectId(title);
  
      const blog = await collection.findOne({ _id: blogId });
  
      if (!blog) {
        console.log('Blog post not found for ID:', title);  
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }
  
      const newLikeCount = (blog.like || 0) + 1;
  
      const result = await collection.updateOne(
        { _id: blogId },
        { $set: { like: newLikeCount } }
      );
  
      if (result.modifiedCount === 0) {
        return NextResponse.json({ error: 'Failed to update like count' }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'Like count updated', like: newLikeCount }, { status: 200 });
    } catch (error) {
      console.error('Failed to update like count:', error); 
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }