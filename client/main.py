import random

from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport

client_name = [
    "iOS",
    "web",
    "Android",
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

client_types = []
queries = [
gql("query getPlayers { players { name, title, yearBorn, rating }}"),
gql("query getTournamentName { tournaments { name }}"),
gql("query getAwardDetails { awards { awardName, title }}"),
gql("query getGames { games { whitePlayerName, blackPlayerName, date, result }}"),
gql("query getTournaments { tournaments { name, numberOfPlayers, winnerName }}"),
gql("query getPlayerDetail { players { name, title, yearBorn, rating, biography }}"),
gql("query getHomePageDetail { players { name, title, rating }, games { result }, tournaments { name, winnerName }}"),
]

for i in range(random.randint(50,100)):
    # Provide a GraphQL query
    query = random.choice(queries)
    #print(query)
    # Execute the query on the transport
    result = client.execute(query)