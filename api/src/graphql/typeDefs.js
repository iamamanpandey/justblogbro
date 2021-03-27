const { gql } = require("apollo-server-express");

const typeDefs = gql `
  type Query {
    me: Author!
    author(id: ID!): Author!
    authors: [Author!]!

    post(id: ID!): Post!
    posts: [Post!]!

    category(id: ID!): Category!
    categories: [Category!]!
  }

  type Mutation {
    addAuthor(data: AuthorInput!): String!
    deleteAuthor(id: ID!): String!
    loginAuthor(email: String!, password: String!): LoginAuthor!

    addPost(data: PostInput!, file:Upload!): String!
    updatePost(id: ID!, data: PostInput!): String!
    deletePost(id: ID!): String!

    addCategory(data: CategoryInput!): String!
    updateCategory(id: ID!, data: CategoryInput!): String!
    deleteCategory(id: ID!): String!
    
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  scalar Upload

  type Author {
    id: ID!
    name: String!
    email: String!
    createdAt: Float!
    updatedAt: Float!
    posts:[Post!]!
  }
  type LoginAuthor {
    token: String!
    user: Author!
  }

  type Post {
    id: ID!
    title: String!
    description: String!
    photo:String!
    createdAt: Float!
    updatedAt: Float!
    author:Author!
  }

  input PostInput {
    title: String!
    description: String!
  }

  type Category {
    id: ID!
    title: String
    description: String
    createdAt: Float!
    updatedAt: Float!
  }

  input AuthorInput {
    name: String!
    email: String!
    password: String!
  }
  input CategoryInput {
    title: String!
    description: String!
  }
`;
export default typeDefs;
