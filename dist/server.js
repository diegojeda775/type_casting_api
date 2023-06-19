import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server, {}));
app.use((req, res) => {
    res.send("Hello");
});
await new Promise((resolve) => httpServer.listen({ port: 5000 }, resolve));
console.log(`🚀  Server ready at: http://localhost:5000/graphql`);
