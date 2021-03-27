import gql from 'graphql-tag';

//! USER QUERY & MUTATION

export const GET_ALL_POST = gql `
query posts{
    posts{
        id
        title
        description
        photo
        createdAt
        updatedAt
        author{
           id
           name
        }
    }
}`;


export const GET_POST_BY_ID = gql `
 query post($id:ID!){
     post(id:$id){
       id
      title
      description
      photo
      updatedAt
      createdAt
    }
}   
`;

export const GET_ME = gql `
query   me{
      me{
        id
        name
        email
      }
}`;



export const GET_ALL_AUTHOR = gql `
query  authors{
    authors{
        id
        name
        email
    }
}`;

export const GET_AUTHOR_BY_ID = gql `
 query author($id:ID!){
   author(id:$id){
      id  
      name
      email
   }
 }
`;

export const ADD_POST = gql `
mutation addPost($data:PostInput!,$file:Upload!){
    result: addPost(data: $data, file:$file)
}   
`;

export const DELETE_POST = gql `
mutation deletePost($id:ID!){
  result:deletePost(id:$id)
}
`;

export const EDIT_POST = gql`
  mutation updatePost($id: ID!, $data: PostInput!) {
    result: updatePost(id: $id, data: $data)
  }
`;
export const REGISTER_AUTHOR = gql`
  mutation addAuthor($data: AuthorInput!) {
    result: addAuthor(data: $data)
  
  }
`;
export const LOGIN_AUTHOR = gql `
 mutation loginAuthor($email: String!, $password: String!){
    loginAuthor(email: $email, password:$password){
      token
     user{
        id
        name
        email
      }
    }
  }
   `;

export const DELETE_USER = gql`
  mutation deleteAuthor($id: ID!) {
    result: deleteAuthor(id: $id)
  }
`;

