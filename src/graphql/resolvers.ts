import prisma from "../config/db.js";
import { GraphQLError } from "graphql";

type UserInput = {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const resolvers = {
  Query: {
    users: async () => await prisma.user.findMany(),
    user: async (_: unknown, args: { id: string }) => {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
      return user;
    },
  },
  Mutation: {
    createUser: async (_: unknown, args: UserInput) => {
      try {
        const user = await prisma.user.create({
          data: {
            userName: args.userName,
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            password: args.password,
          },
        });
        return user;
      } catch (error) {
        throw new GraphQLError("Error creating user", {
          extensions: {
            code: "USER_NOT_CREATED",
          },
        });
      }
    },
  },
};

export default resolvers;
