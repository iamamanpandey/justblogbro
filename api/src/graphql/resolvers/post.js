import { ApolloError } from "apollo-server-express";
import { Posts } from "../../models/index";
import * as fs from "fs";
const path = require("path");

export default {
  Query: {
    post: async (parent, args, ctx) => {
      return await Posts.findById(args.id);
    },
    posts: async (parent, args, ctx) => {
      return await Posts.find().sort({ createdAt: -1 });
    }, 
  },
  Mutation: {
    addPost: async (parent, { data }, ctx) => {
      try {
        await Posts.create(data);
        return "Post has beeen created";
       } catch (error) {
        return new ApolloError(error);
      }
    },



    singleUpload: async (parent, args) => {

        const { createReadStream, filename, mimetype } = await args.file; 
      
        await  new Promise((res)=>{
          createReadStream().pipe(fs.createWriteStream(path.join(__dirname, "./upload",filename )).on("close", res))
        });
         return 'photo has been uploaded!!';   

    },


    updatePost: async (parent, { id, data }, ctx) => {
      try {
        await Posts.findByIdAndUpdate(id, data, {
          new: true, 
        });
        return "Updated post succesfully";
      } catch (error) {
        return new ApolloError(error);
      }
    },

    deletePost: async (parent, args, ctx) => {
      try {
        await Posts.findByIdAndRemove(args.id);
        return "post deleted Successfully!!!!!";
      } catch (error) {
        return new ApolloError(error);
      }
    },
  },
};
