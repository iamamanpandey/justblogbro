import gql from 'graphql-tag';

//! USER QUERY & MUTATION

export const GET_ALL_POST = gql `
query posts{
    posts{
        id
        title
        description
    }
}`;


export const ADD_POST = gql `
mutation addPost($data:PostInput!){
    result: addPost(data: $data)
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

