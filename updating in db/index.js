import express from "express";
import connectDB from "./db/connectDB.js";
// import { UpdateById } from "./models/Movie.js";
import { updateMany } from "./models/Movie.js";

const app = express();

const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);
// UpdateById("666acb6507e95292190ed1ec");
updateMany();

app.listen(port, () => console.log(`Server Listening on port ${port}`));
