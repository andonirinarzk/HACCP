const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./config/database');
const { typeDefs, resolvers } = require('./graphql/schema');
const { initDb } = require('./models');  // Import initDb from models

const app = express();
const port = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    initDb().then(() => {  // Initialize the database
      app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}${server.graphqlPath}`);
      });
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
