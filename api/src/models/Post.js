import { model, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      trim: true,
    },
    author:{
      type:Schema.Types.ObjectId,
      ref:'Authors'
    },
    category:{
      type:Schema.Types.ObjectId,
      ref:'Categories'
    }
   
  },
  { timestamps: true }
);

export default model("Posts", postSchema);
