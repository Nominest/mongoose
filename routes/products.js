import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: String,
    year: Number,
    genre: String,
  },
  {
    collection: "movies",
  }
);

const Movie = mongoose.model("Movie", MovieSchema, "movies");

export default Movie;
