// This function returns the client object and the db object after creating a connection to MongoDB.

// Import the MongoClient
import { MongoClient } from "mongodb";

export default async function createConnection(host, port, dbName) {
  const url = `mongodb://${host}:${port}`; // Replace with your MongoDB connection string
  //const dbName = "my-database"; // Replace with your database name

  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    console.log("Connected to MongoDB successfully");
    return { db, client };
  } catch (error) {
    console.log("Failed to connect to MongoDB");
    console.log(error);
    return null;
  }
}
