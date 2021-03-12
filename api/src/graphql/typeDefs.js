const { gql } = require('apollo-server-express');

const typeDefs = gql `
 
type Query {
     author(id: ID!): Author!
     authors: [Author!]!

     post(id: ID!): Post!
     posts: [Post!]!
  },



  type Mutation{

    addAuthor(name: String!, email: String!, password: String!): String!
    deleteAuthor(id: ID!): String!


   
    
    addPost(title:String!, description: String!): String!
    deletePost(id: ID!): String!

  },


  type Author{
      id: ID!
      name: String!
      email: String!
      createdAt: Float!
      updatedAt: Float!
  },

  type Post{
    id: ID!
    title: String!
    description: String!
    createdAt: Float!
    updatedAt: Float!
},

  
`;
export default typeDefs;