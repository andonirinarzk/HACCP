const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

// Création du serveur Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Lancement du serveur
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
