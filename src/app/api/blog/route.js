import { connectDB } from "@/lib/config/db";

const {NextResponse} = require("next/server");

// const LoadDB= async ()=>{
//     await connectDB();

// }

// LoadDB();

// export async function GET(req) {

//     return NextResponse.json({msg: "hello"});
    
//   }

export async function GET(req) {
    try {
      const db = await connectDB();
      const collection = db.collection('blog'); // Select your collection here
      const blogs = await collection.find({}).toArray(); // Fetch all blogs
      return NextResponse.json(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
  }