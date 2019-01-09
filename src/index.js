import "@babel/polyfill/noConflict"
import {
  GraphQLServer
} from "graphql-yoga";
import db from "./db"
import {
  resolvers
} from "./resolvers/index"


const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context(request) {
    //console.log(request.request.headers.authorization)
    return {
      db,
      request
    }
  }
});

server.start({
  port: process.env.PORT || 4000
}, () => {
  console.log("The server is up!");
});