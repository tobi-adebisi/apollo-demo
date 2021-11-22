
const games = require('./games.json');

const resolvers = {
    Query: {
      // returns an array of chess Games 
      games: () => games
    },
  };
  
  module.exports = resolvers;