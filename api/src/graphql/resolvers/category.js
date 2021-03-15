import { ApolloError } from 'apollo-server-express';
import { Categories } from '../../models/index';

export default {
    Query: {
        category: async (parent, {id}, ctx) => {
            return await Categories.findById(id)
        },
        categories: async (parent, args, ctx) => {
            return await Categories.find();
        }
    },

    Mutation: {
        addCategory: async (parent, {data}, ctx) => {
            try {
                await Categories.create(data)
               
                return "Category  has been created"
            } catch (error) {
                return new ApolloError(error)
            }
        },
        updateCategory: async (parent, { id,data }, ctx) => {
            try {
                await Categories.findByIdAndUpdate(id, data, {new: true})
                return "Category  has been updateddd"
            } catch (error) {
                return new ApolloError(error)
            }
        },
        deleteCategory: async (parent, { id }, ctx) => {
            try {
                await Categories.findByIdAndDelete(id)
                return "Category  has been deleted"
            } catch (error) {
                return new ApolloError(error)
            }
        }
    }
}