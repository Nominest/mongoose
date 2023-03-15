// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/mongooseconfig.js";
import Movie from "./routes/products.js";

const port = 2200;
const app = express();
app.use(cors());
app.use(bodyParser.json());

db.once("open", () => {
  Movie.find({})
    .limit(1)
    .then((movies) => {
      console.log("Movies", movies);
    });
});

db.on("error", (error) => {
  console.log("error", error);
});
// const mongo_connection =
//   "mongodb+srv://nominest:YgJhyP7RQCnJbyjs@cluster0.puiwl6z.mongodb.net/?retryWrites=true&w=majority";
// mongoose
//   .connect(mongo_connection)
//   .then((res) => {
//     console.log(res);
//     console.log("connected successfully");
//   })
//   .catch((req) => {
//     console.log("error");
//   });

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
