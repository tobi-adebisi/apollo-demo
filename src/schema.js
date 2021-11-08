const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get players"
    players: [Player!]!
  }

  "A chess player"
  type Player {
    "The name of the chess player"
    name: String!
    "The year the player was born"
    yearBorn: String!
    "The country the player represents"
    country: String!
    "The chess title of the player"
    title: String! 
    "The rating of the player"
    rating: Int
    "A short biography of the player"
    biography: String
  }

  "A chess game between two chess players"
  type Game {
    "The chess player with the white pieces"
    whitePlayerName: String!
    "The chess player with the black pieces"
    blackPlayerName: String! 
    "The date the chess game was played"
    date: String!
    "The result of the chess game"
    result: String! 
  }


  "A chess tournament, played by chess players"
  type Tournament {
    "The name of the chess tournament"
    name: String!
    "The number of players in the chess tournament"
    numberOfPlayers: Int!
    "The number of games in the chess tournament"
    numberOfGames: Int!
    "The winner of the chesss tournament"
    winnerName: String!
    "The players in the chess tournament
    players: [Player!]!
  }
`;

module.exports = typeDefs;
