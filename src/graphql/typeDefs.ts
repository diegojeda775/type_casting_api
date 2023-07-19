//todo update User adding created at and updated at.

const typeDefs = `#graphql
  type User {
    id: String!
    userName: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    # photos: Photo[]
  }
  
  type Photo {
    id: String!
    userId: String!
  }

  type Input {
    userName: String
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type CreateUserResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  type Query {
    users: [User!]
    user(id: String!): User!
  }

  type Mutation {
    createUser(userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String): CreateUserResponse
  }
`;

export default typeDefs;
