import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// export async function GET(req) {
//   try {
//     const db = await connectDB();
//     const collection = db.collection('blog');
    
//     // Assume you're getting the title and searching by it
//     const url = new URL(req.url, `http://${req.headers.host}`);
//     const id = url.searchParams.get('title');
    
//     if (!id) {
//       return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
//     }

//     // Fetch the blog post using MongoDB _id
//     const blog = await collection.findOne({ _id: new ObjectId(id) });

//     if (!blog) {
//       return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
//     }

//     const relatedPosts = await collection.find({ _id: { $ne: new ObjectId(id) } })
//       .limit(2)
//       .toArray();

//     return NextResponse.json({ blog, relatedPosts });
//   } catch (error) {
//     console.error('Error fetching blog:', error);
//     return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
//   }
// }





export async function GET(req, { params }) {
  try {
    const db = await connectDB();
    const collection = db.collection('blog');
    
    // Extract the title from the dynamic route params
    const { title } = params; // 'title' is the ObjectId in string form
    
    if (!title) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }

    // Convert the title (which is actually an ObjectId) to an ObjectId type
    const blogId = new ObjectId(title);

    // Fetch the blog post using the ObjectId
    const blog = await collection.findOne({ _id: blogId });

    if (!blog) {
      console.log('Blog post not found for ID:', title);  // Log error
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Find related posts (excluding the current one)
    const relatedPosts = await collection.find({ _id: { $ne: blogId } })
      .limit(2)
      .toArray();

    return NextResponse.json({ blog, relatedPosts });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}


