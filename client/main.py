import random

from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport

client_name = [
    "iOS",
    "web",
    "Android",
    "Quest VR",
    "Apple TV"
]

versions = ['2.0', '2.1', '2.2']

# Select your transport with a defined url endpoint
transport = RequestsHTTPTransport(
    url="https://adebisi-presales-demo.uc.r.appspot.com/",
    headers={
        'apollographql-client-name': random.choice(client_name),
        'apollographql-client-version': random.choice(versions)
    }, verify=True, retries=3,
)

# Create a GraphQL client using the defined transport
client = Client(transport=transport, fetch_schema_from_transport=False)

queries = [
gql("query getPlayers { players { name, title, rating }}"),
gql("query getPlayerDetail { players { name, title, rating, yearBorn, biography }}"),
gql("query getTournamentName { tournaments { name }}"),
gql("query getTournamentDetails { tournaments { name, numberOfPlayers, numberOfGames, winnerName }}"),
gql("query getTournaments { tournaments { name, numberOfPlayers, winnerName }}"),
gql("query getHomePageDetail { players { name, title, rating }, games { result }, tournaments { name, winnerName }}"),
]

#gql("query getGames { games { whitePlayerName, blackPlayerName, date, result }}"),

for i in range(random.randint(50,100)):
    # Provide a GraphQL query
    query = random.choice(queries)
    # Execute the query on the transport
    result = client.execute(query)