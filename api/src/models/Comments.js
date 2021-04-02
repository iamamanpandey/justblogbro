import { Schema, model } from "mongoose";

export const commentSchema = new Schema(
  {
    comment: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Authors",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Authors",
      required: true,
    },
    reply: {
      type: [commentSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default model("Reviews", reviewSchema);
