import { ApolloError } from "apollo-server-express";
import { Posts } from "../../models/index";

import * as fs from "fs";

const path = require("path");

export default {
  Query: {
    post: async (parent, args, ctx) => {
      var singlepost = await Posts.findById(args.id).populate("author").exec();
      singlepost.likecount = singlepost.likes.length
        ? singlepost.likes.length
        : 0;
      return singlepost;
    },

    posts: async (parent, args, ctx) => {
      const posts = await Posts.find().populate("author").exec();
      return posts.map((post) => {
        post.likecount = post.likes.length;
        return post;
      });
    },
  },

  Mutation: {
    addPost: async (parent, { data, file }, ctx) => {
      try {
        const { createReadStream, filename, mimetype } = await file;
        const newFilename = Date.now();
        const filepath = `upload/${newFilename}.${path.extname(filename)}`;

        await new Promise((resolve, reject) => {
          createReadStream()
            .pipe(fs.createWriteStream(filepath))
            .on("finish", async () => {
              await Posts.create({
                ...data,
                author: ctx.user.sub,
                photo: `http://localhost:8000/${filepath}`,
              });
              return resolve("ho rha hai");
            })
            .on("error", (err) => {
              console.log(err);
              return reject(err);
            });
        });
        return "Post has beeen created";
      } catch (error) {
        return new ApolloError(error);
      }
    },
    // bannerUpload: async (parent, { id, file }) => {
    //   try {
    //     const { createReadStream, filename, mimetype } = await file;
    //     const filepath = `./upload/${filename}`;

    //     await new Promise((resolve, reject) => {
    //       createReadStream()
    //         .pipe(fs.createWriteStream(filepath))
    //         .on("finish", async () => {
    //           await Posts.findOneAndUpdate(
    //             { _id: id },
    //             { photo: filepath },
    //             { new: true }
    //           );
    //           return resolve("photo added!");
    //          })
    //         .on("error", (err) => {
    //           console.log(err);
    //           return reject(err);
    //         });
    //     });
    //     return file;
    //   } catch (error) {
    //     return new ApolloError(error);
    //   }
    // },
    updatePost: async (parent, { id, data }, ctx) => {
      try {
        await Posts.findByIdAndUpdate({ _id:id, author: ctx.user.sub }, data, {
          new: true,
        });
        return "Updated post succesfully";
      } catch (error) {
        return new ApolloError(error);
      }
    },

    deletePost: async (parent, { id }, ctx) => {
      try {
        await Posts.findOneAndRemove({ _id: id, author: ctx.user.sub });
        return "post deleted Successfully!!!!!";
      } catch (error) {
        return new ApolloError(error);
      }
    },

    //add like

    addlike: async (parent, { id }, { user }) => {
      try {
        const isLiked = await Posts.find({ _id: id, likes: { $in: user.sub } });

        if (isLiked.length == 0) {
          await Posts.updateOne(
            { _id: id },
            { $push: { likes: user.sub }, new: true }
          );
        } else {
          await Posts.updateOne(
            { _id: id },
            { $pullAll: { likes: [user.sub] } }
          );
        }
        return "like has been added!!";
      } catch (error) {
        return new ApolloError(error);
      }
    },

    addclaps: async (parent, { id, claps }, ctx) => {
      try {
        const Like = Posts.findById(id);
        await Like.updateOne({ $push: { claps } });
        return "Claps has been added!!";
      } catch (error) {
        return new ApolloError(error);
      }
    },

    addkohinoor: async (parent, { id }, { user }) => {
      try {
        const isLiked = await Posts.find({ _id: id, likes: { $in: user.sub } });

        if (isLiked.length == 0) {
          await Posts.updateOne(
            { _id: id },
            { $push: { kohinoors: user.sub }, new: true }
          );
        } else {
          await Posts.updateOne(
            { _id: id },
            { $pullAll: { kohinoors: [user.sub] } }
          );
        }
        return "kohinoor has been added!!";
      } catch (error) {
        return new ApolloError(error);
      }
    },
  },
};
