import { ApolloError } from 'apollo-server-express';
import { Posts } from '../../models/index';



export default {
    Query: {
        post: async (parent, args, ctx) => {
            return await Posts.findById(args.id);
        },
        posts: async (parent, args, ctx) => {
            return await Posts.find();
        }
    },

    Mutation: {
        addPost: async (parent,{data} ,ctx) => {
            try {
                await Posts.create(data)
                return "Post has beeen created"

            } catch (error) {
                return new ApolloError(error)
            }
        },

        updatePost: async(parent, {id, data} , ctx)=>{
            try{
                await Posts.findByIdAndUpdate(id, data,  { new: true})
                return "Updated post succesfully"
            }catch(error){
                 return new ApolloError(error);
            }
        },

        deletePost: async (parent, args, ctx) => {
            try {
                await Posts.findByIdAndRemove(args.id)
                return "post deleted Successfully!!!!!"
            } catch (error) {
                return new ApolloError(error)
            }
        }

    }
}