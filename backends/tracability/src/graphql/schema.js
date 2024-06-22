const { gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

const typeDefs = gql`
  type Query {
    users: [User]
  }
  type User {
    id: ID!
    username: String!
    fullName: String!
    role: String!
  }
`;

module.exports = { typeDefs, resolvers };
