const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const mongourl = process.env.MONGODB_URL;
const client = new MongoClient(mongourl);

let db;

async function connectToDB() {
  if (db) return db;
  try {
    await client.connect();
    db = client.db("agro");
    console.log("MongoDB Connected");
    return db;
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

module.exports = { connectToDB };