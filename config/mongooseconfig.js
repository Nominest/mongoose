import mongoose from "mongoose";

const db = mongoose.connect(
  "mongodb+srv://nominest:YgJhyP7RQCnJbyjs@cluster0.puiwl6z.mongodb.net/sample_mflix?authMechanism=DEFAULT"
);

export default mongoose.connection;

// mongodb+srv://nominest:YgJhyP7RQCnJbyjs@cluster0.puiwl6z.mongodb.net/?retryWrites=true&w=majority
