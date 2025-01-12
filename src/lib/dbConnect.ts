import { MongoClient, Db } from "mongodb";

let cachedDb: Db | null = null;

export default async function dbConnect(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable.");
  }

  const client = await MongoClient.connect(uri);
  const db = client.db("data"); 
  cachedDb = db;
  return db;
}
