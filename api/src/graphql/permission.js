import { allow, and, or, rule, shield } from "graphql-shield";


const isAuthenticated = rule()((parent, args, {user}) => {
  return user !== null;
 });

export default shield({

  Query:{
  post:isAuthenticated,
  author:isAuthenticated,
  authors:isAuthenticated,
  posts:isAuthenticated
  },

  Mutation: {
    // TODO: USER MUTATIONS PERMISSION
    addPost:isAuthenticated,
    updatePost:isAuthenticated,
    deletePost:isAuthenticated,
  }
});
