const tournaments = require('./tournaments.json');

const resolvers = {
    Query: {
      // returns an array of chess Tournaments 
      tournaments: () => tournaments
    },
  };
  
  module.exports = resolvers;