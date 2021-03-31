import { model, Schema } from "mongoose";


// const clapSchema = new Schema(
//   {
//      clap: {
//       type: Number,
//     },
//     post: {
//       type: Schema.Types.ObjectId,
//       ref: "Posts",
//     },
//   },
//   { timestamps: true }
// );

// const kohinoorSchema = new Schema(
//   {
//     like: {
//       type: Number,
//     },
//     author: {
//       type: Schema.Types.ObjectId,
//       ref: "Authors",
//     }
//   },
//   { timestamps: true }
// );

// const likesSchema = new Schema(
//   {
//     like: {
//       type: Number,
//     },
//     author: {
//       type: Schema.Types.ObjectId,
//       ref: "Authors",
//     }
//   },
//   { timestamps: true }
// );


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

    // likes: {
    //   type: [likesSchema],
    //   default: []
    // },
    // claps: {
    //   type: [clapSchema],
    //   default: []
    // },
    // kohinoor: {
    //   type: [kohinoorSchema],
    //   default: []
    // },
  },
  { timestamps: true }
);



export default model("Posts", postSchema);
