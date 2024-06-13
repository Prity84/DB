import express from "express";
import { insertManyDoc } from "./models/Movie.js";

// import {createDoc} from "./models/Movie.js"
import connectDB from "./db/connectDB.js";

const app = express();

const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);

insertManyDoc();
// createDoc();

app.listen(port, () => console.log(`Server Listening on port ${port}`));
