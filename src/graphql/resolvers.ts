// import books from "../models/dbFile";
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    title: "Sin city",
    author: "Sherrilyn Kenyon",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers;
