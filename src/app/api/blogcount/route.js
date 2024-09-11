import { connectDB } from "@/lib/config/db";

export async function GET(req, res) {
    try {
      const { db } = await connectDB(); // Define or import connectDB function
      console.log('Database connected:', db);
  
      const blogCount = await db.collection('blog').countDocuments({});
  
      res.status(200).json({ count: blogCount });
    } catch (error) {
      console.error('Error fetching blog count:', error);
      res.status(500).json({ error: 'Failed to fetch blog count' });
    }
  }