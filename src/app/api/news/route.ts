import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';

export async function GET() {
  try {
  
    const db = await dbConnect();
    const collection = db.collection("news");

    const results = await collection.find().toArray();
    console.log(results);

    const response = NextResponse.json(results);
    
    response.headers.set('Access-Control-Allow-Origin', 'https://provincial-justice.vercel.app');  // Replace with your frontend URL
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return response;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { error: "Failed to fetch data", details: errorMessage },
      { status: 500 }
    );
  }
}
