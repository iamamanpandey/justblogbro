import {  ApolloError } from 'apollo-server-express';
import { Authors } from '../../models/index';


export default {
    Query: {
        author: async (parent, args, ctx) => {
            return await Authors.findById(args.id);
        },
        authors: async (parent, args, ctx) => {
       
            return await Authors.find();
        }
    },
    Mutation: {
        addAuthor: async (parent, args, ctx, info) => {
            try {
                await Authors.create(args)
                return "Author  has been added!!"
            } catch (error) {
                return new ApolloError(error)
            }
        },
        deleteAuthor: async (parent, args, ctx) => {
            try {
                await Authors.findById(args.id).remove();
                return "Author has been deleted!"
            } catch (error) {
                return new ApolloError(error)
            }
        },
    }
}