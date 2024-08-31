import { connectDB } from "@/lib/config/db"; // Adjust the path as necessary
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import nodemailer from 'nodemailer';

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOTP = async (email, otp) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_API,
    },
  });

  await transporter.sendMail({
    from: '"Everyday Echoes" <no-reply@everydayechoes.com>',
    to: email,
    subject: "Your OTP for Subscription",
    text: `Your OTP is ${otp}`,
  });
};

// Handler for the subscription
export async function POST(req) {
  try {
    const { email, otp, name, step } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const db = await connectDB();
    const collection = db.collection('users');

    if (step === 1) {
      const otp = generateOTP();
      await sendOTP(email, otp);
      await collection.insertOne({ email, otp, verified: false });
      return NextResponse.json({ message: 'OTP sent' });
    }

    if (step === 2) {
      const subscriber = await collection.findOne({ email });

      if (!subscriber || subscriber.otp !== otp) {
        return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
      }

      return NextResponse.json({ message: 'OTP verified' });
    }

    if (step === 3) {
      await collection.updateOne({ email }, { $set: { name, verified: true } });
      return NextResponse.json({ message: 'Subscription successful' });
    }

    return NextResponse.json({ error: 'Invalid step' }, { status: 400 });
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
  }
}
