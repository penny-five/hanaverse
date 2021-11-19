# hanaverse-client

React & react-konva

Local development
`yarn && yarn start`

Build docker container
`docker build -t hanaverse-client .`

Test container locally
`docker run -p 8080:80 -it --rm hanaverse-client`

Login to Heroku
`heroku login`

Login to Heroku container
`heroku container:login`

Push container to Heroku
`heroku container:push hanaverse-client --app hanaverse-client`

Deploy pushed container to Heroku
`heroku container:release hanaverse-client --app hanaverse-client`
