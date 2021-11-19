
publish:
	rover graph publish Elite-Chess-Demo@current --schema ./schema.graphql 

deploy:
	gcloud app deploy

rcheck:
	rover graph check Elite-Chess-Demo \
	--schema=schema.graphql \
	--validation-period=2w