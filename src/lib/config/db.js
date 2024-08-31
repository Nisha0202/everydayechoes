

import { MongoClient } from 'mongodb';

// Connection URI and options
const uri = `mongodb+srv://Admin:Admin0202@cluster0.5cua0xk.mongodb.net/blogy?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(process.env.MONGOO_URL);

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



