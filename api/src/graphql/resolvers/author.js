import { ApolloError, AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import { Authors, Posts } from "../../models/index";

export default {
  Query: {
    author: async (parent, args, ctx) => {
      return await  Authors.findById(args.id);
    },
    me: async (parent, args, ctx) => {
      return await Authors.findById(ctx.user.sub);
    },
    authors: async (parent, args, ctx) => {
      return await Authors.find()
    },
  },

  Mutation:{
    addAuthor: async (parent, { data }, ctx) => {
      try {
            await Authors.create(data);
            return "author has been created"
      } catch (error) {
        return new ApolloError(error);
      }
    },

    loginAuthor: async (parent, { email, password }) => {
      try {
        const user = await Authors.findOne({
          email,
          password,
        }).exec();
        const token = jwt.sign(
          {
            payload: {
              email: user.email,
              name: user.name,
            },
          },
          "super secret",
          {
            algorithm: "HS256",
            subject: user.id,
            expiresIn: "1d",
          }
        );

        return {
          token: token,
          user: user,
        };
      } catch (error) {
        return new AuthenticationError(error);
      }
    },

    deleteAuthor: async (parent, args, ctx) => {
      try {
        await Authors.findById(args.id).remove();
        return "Author has been deleted!";
      } catch (error) {
        return new ApolloError(error);
      }
    },
  },

  Author: {
    posts: async (parent,args, ctx) => {
      try {
         return await Posts.find({author: parent.id}).exec()
      } catch (error) {
        return new ApolloError(error)
      }
    }
},

};
