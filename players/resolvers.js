
const players = require('./players.json');

const resolvers = {
    Query: {
      // returns an array of chess Players 
      players: () => players
    },
  };
  
  module.exports = resolvers;
  