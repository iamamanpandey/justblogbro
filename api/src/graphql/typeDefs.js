const { gql } = require('apollo-server-express');

const typeDefs = gql `
 
type Query {
     author(id: ID!): Author!
     authors: [Author!]!

  },


  type Mutation{

    addAuthor(name: String!, email: String!, password: String!): String!
    deleteAuthor(id: ID!): String!

  },


  type Author{
      id: ID!
      name: String!
      email: String!
      createdAt: Float!
      updatedAt: Float!
  },

  
`;
export default typeDefs;