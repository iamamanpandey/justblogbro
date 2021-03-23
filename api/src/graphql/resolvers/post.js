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

    bannerUpload: async (parent, {id, file}) => {
          try {
         const { createReadStream, filename, mimetype } = await file; 
         const filepath = `./upload/${filename}`;
         await  new Promise((resolve,reject)=>{
          createReadStream()
          .pipe(fs.createWriteStream(filepath))
          .on("finish", async () => {
            await Posts.findOneAndUpdate(
              { _id: id },
              { photo: filepath },
              { new: true }
            );
            return resolve('photo added!');
          })
          .on("error", (err) => {
            console.log(err);
            return reject(err);
          })
         });
         return file;
         } catch (error) {
          return new ApolloError(error);
        }
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
