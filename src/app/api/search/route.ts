import dbConnect from "@/lib/dbConnect";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url!);
  const query = searchParams.get("query") || "";

  try {
    const db = await dbConnect(); 
    const collection = db.collection("laws"); 

    const results = await collection
      .find({ title: { $regex: query, $options: "i" } }) 
      .toArray();
      console.log(results);

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return new Response(
      JSON.stringify({ error: "Failed to fetch data", details: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
