// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// let isConnected = false;
// const uri = `mongodb+srv://Admin:Admin0202@cluster0.5cua0xk.mongodb.net/sweetshare?retryWrites=true&w=majority&appName=Cluster0`;

// export const connectDB = async () => {
//   mongoose.set('strictQuery', true);

//   if (isConnected) {
//     console.log('MongoDB is already connected');
//     return;
//   }

//   try {
//     await mongoose.connect(uri);

//     isConnected = true;
//     console.log('Successfully connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

// Connection URI and options
const uri = `mongodb+srv://Admin:Admin0202@cluster0.5cua0xk.mongodb.net/blogy?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);

export async function connectDB() {
  if (!client.isConnected) {
    try {
      await client.connect();
      console.log('Successfully connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw new Error('Could not connect to database');
    }
  }
  return client.db('blogy');
}



