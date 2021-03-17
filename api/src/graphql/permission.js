import { allow, and, or, rule, shield } from "graphql-shield";


const isAuthenticated = rule()((parent, args, {user}) => {
  return user !== null;
 });



export default shield({

  Mutation: {
    // TODO: USER MUTATIONS PERMISSION
    addPost:isAuthenticated,
    updatePost:isAuthenticated,
    deletePost:isAuthenticated,
  }
});
