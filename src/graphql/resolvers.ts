const users = [
  {
    id: "1",
    userName: "diegojeda775",
    firstName: "Diego",
    lastName: "Ojeda",
    email: "diegojeda775@yahoo.com",
    password: "myPassword",
  },
  {
    id: "2",
    userName: "ctshane",
    firstName: "Courtney",
    lastName: "Shane",
    email: "ctshane@yahoo.com",
    password: "myPassword",
  },
];

const resolvers = {
  Query: {
    users: () => users,
    user: (_: any, args: { id: string }, __: any, ___: any) => {
      return users.find((u) => u.id === args.id);
    },
  },
};

export default resolvers;
