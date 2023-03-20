import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/mongooseconfig.js";
import movie from "./model/movie.js";
import cloudinary from "./config/cloudinary.js";

const port = 2200;
const app = express();
app.use(cors());
app.use(bodyParser.json());

db.once("open", () => {
  movie
    .find({})
    .limit(1)
    .then((movies) => {
      console.log("Movies", movies);
    });
});

db.on("error", (error) => {
  console.log("error", error);
});

//cloudinary upload
const res = cloudinary.v2.uploader.upload(
  "/Users/morning/Downloads/download.jpeg",
  {
    // public_id: "olympic_flag",
    folder: "cat",
    use_filename: true,
  }
);

res
  .then((data) => {
    console.log(data);
    console.log(data.secure_url);
  })
  .catch((err) => {
    console.log(err);
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
