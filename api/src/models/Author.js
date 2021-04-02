import mongoose from "mongoose";
const { Schema } = mongoose;

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    education: {
      type: String,
    },
    work: {
      type: String,
    },
    banner: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Authors", authorSchema);
