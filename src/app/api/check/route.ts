
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";



export async function GET() {
  try {
    await dbConnect(); 
    return NextResponse.json({
      message: "Database connection successful",
      connected: true,
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json(
      {
        message: "Database connection failed",
        connected: false,
      },
      { status: 500 }
    );
  }
}
