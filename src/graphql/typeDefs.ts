//todo update User adding created at and updated at.
const typeDefs = `
  type User {
    id: String!
    userName: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]
    user(id: String!): User
  }
`;

export default typeDefs;
