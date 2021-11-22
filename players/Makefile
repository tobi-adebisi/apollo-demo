publish:
	rover subgraph publish Elite-Chess-Demo@current \
  	--routing-url https://players-dot-adebisi-presales-demo.uc.r.appspot.com/ \
  	--schema ./schema.graphql \
  	--name players

deploy:
	gcloud app deploy

check:
	rover graph check Elite-Chess-Demo \
	--schema=schema.graphql \
	--validation-period=2w