import { ApolloError } from "apollo-server-express";
import { Posts } from "../../models/index";
import * as fs from "fs";

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
    singleUpload: (parent, args) => {
      console.log(args);
      return args.file.then((file) => {
        const { createReadStream, filename, mimetype } = file;

        const fileStream = createReadStream();

        fileStream.pipe(fs.createWriteStream(`./uploadedFiles/${filename}`));

        return file;
      });
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
