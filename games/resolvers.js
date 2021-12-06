
const games = require('./games.json');

function fetchGamesByPlayer(player){
  var gamesByPlayer = [];

  for (var i = 0; i < games.length; i++) {
    if (games[i].whitePlayerName === player.name || 
        games[i].blackPlayerName === player.name) {
      gamesByPlayer.push(games[i]);
    }
  }

  return gamesByPlayer;
}

const resolvers = {
    Query: {
      // returns an array of chess Games 
      games: () => games
    },
    Player: {
      games(player) {
        return fetchGamesByPlayer(player);
      }
    }
  };
  
  module.exports = resolvers;