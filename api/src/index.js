import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import typeDefs from "./graphql/typeDefs";
import permission from "./graphql/permission";
import resolvers from "./graphql/resolvers/index.js";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import expressJwt from "express-jwt";
const app = express();



app.use('/upload', express.static('upload'));

const server = new ApolloServer({
  schema: applyMiddleware(
    makeExecutableSchema({ typeDefs, resolvers }),
    permission
  ),
  context: ({ req }) => {
    const user = req.user || null;
    return { user };
  },
});

mongoose
  .connect(
    `mongodb+srv://amanpandey:aman1234@cluster0.eayko.mongodb.net/myBlogDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({limit:'50mb'}));

app.use(
  expressJwt({
    secret: "super secret",
    algorithms: ["HS256"],
    credentialsRequired: false,
  })
);
server.applyMiddleware({ app });

app.listen({ port: 8000 }, () =>
  console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`)
);
