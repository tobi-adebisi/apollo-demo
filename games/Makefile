publish:
	rover subgraph publish Elite-Chess-Demo@current \
  	--routing-url https://games-dot-adebisi-presales-demo.uc.r.appspot.com \
  	--schema ./schema.graphql \
  	--name games

deploy:
	gcloud app deploy

check:
	rover subgraph check Elite-Chess-Demo \
	--schema=schema.graphql \
	--name=games