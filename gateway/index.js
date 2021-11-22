const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

require('dotenv').config();


const gateway = new ApolloGateway();

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway
});

const PORT = process.env.PORT || 4000;

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
