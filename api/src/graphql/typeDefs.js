const { gql } = require('apollo-server-express');

const typeDefs = gql`
 
type Query {
     author(id: ID!): Author!
     authors: [Author!]!

     post(id: ID!): Post!
     posts: [Post!]!

     category(id:ID!):Category!
     categories: [Category!]!
  },



  type Mutation{

    addAuthor(name: String!, email: String!, password: String!): String!
    deleteAuthor(id: ID!): String!
    loginAuthor(email: String!, password: String!): LoginAuthor!
    
    addPost(data:PostInput!): String!
    updatePost(id:ID!,data:PostInput!):String!
    deletePost(id: ID!): String!
     
    addCategory(data: CategoryInput!): String!
    updateCategory(id:ID! data:CategoryInput!): String!
    deleteCategory(id:ID!): String!

  },

  
  type Author{
      id: ID!
      name: String!
      email: String!
      createdAt: Float!
      updatedAt: Float!
  },
  type LoginAuthor {
    token: String!
    user:Author!
}

  type Post{
    id: ID!
    title: String!
    description: String!
    createdAt: Float!
    updatedAt: Float!
},

 input PostInput{
  title:String!
  description: String!
}

  type Category{
    id:ID!,
    title:String,
    description:String,
    createdAt:Float!,
    updatedAt:Float!
  }

input CategoryInput{
  title:String!
  description: String!
}
  
`;
export default typeDefs;