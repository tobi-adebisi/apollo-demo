const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const fs = require('fs');
const resolvers = require('./resolvers');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql(fs.readFileSync('schema.graphql', 'utf8'))

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
    schema: buildFederatedSchema([{ typeDefs, resolvers }])
 });

const PORT = process.env.PORT || 8080;

// The `listen` method launches a web server.
server.listen({port:PORT}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});