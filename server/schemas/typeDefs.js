
const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Music{
    _id: ID!
    artists: String!
    coverart: String!
    title: String!
    genre: String!
    url: String!
    year: Int!
  }

  type Auth {
    token: ID!
    user: User!
  }
  type Post{
    _id: ID!
    title: String!
    description: String!
    likes: Int
    comments: Int
    images: String!
    profileImage: String!
    user: String!
  }

  type Query {
  me: User
  posts: [Post]
  musics: [Music]
  music(_id: ID!): Music
  }
  

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    createPost(title: String!, description: String!, images: String!, profileImage: String!, user: String!): Post
    login(email: String!, password: String!): Auth
    createComment(postId: ID!, content: String!): Post
  }

  
`;

module.exports = typeDefs;

