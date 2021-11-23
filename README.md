# Apollo Demo

Federated schema with 3 services:

 * players/ - using Apollo Server (JS)
 * games/ - using Apollo Server (JS)
 * tournaments/ - using Apollo Server (JS)

## Setup (local)

Add `.env` files in each service, gateway, and clients directory as documented here:
    https://www.apollographql.com/docs/tutorial/production/#set-environment-variables

Run `npm install` for the NodeJS projects. 

## Deployment

In each service:

```make deploy```