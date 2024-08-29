import { connectDB } from "@/lib/config/db";

const {NextResponse} = require("next/server");

const LoadDB= async ()=>{
    await connectDB();

}

LoadDB();

export async function GET(req) {

    return NextResponse.json({msg: "hello"});
    
  }