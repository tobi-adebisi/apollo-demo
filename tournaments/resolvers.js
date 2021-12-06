const tournaments = require('./tournaments.json');

function fetchTournamnentsByPlayer(player){
  var tournamnentsByPlayer = [];

  for (var i = 0; i < tournaments.length; i++) {
    if (tournaments[i].players.includes(player.name)) {
      tournamnentsByPlayer.push(tournaments[i]);
    }
  }

  return tournamnentsByPlayer;
}

const resolvers = {
    Query: {
      // returns an array of chess Tournaments 
      tournaments: () => tournaments
    },
    Player: {
      tournaments(player) {
        return fetchTournamnentsByPlayer(player);
      }
    }
  };
  
  module.exports = resolvers;