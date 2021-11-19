# hanaverse-client

React & react-konva app

## Local development with yarn

Local development

```
yarn start
```

## Local docker image for docker-compose

Build docker container

```
docker build -t hanaverse-client .
```

Test container locally

```
docker run -p 8080:80 -it --rm hanaverse-client
```

## Deploy to Netlify

Build React app

```
yarn build
```

Login to Netlify

```
netlify login
```

Deploy built site to Heroku

```
netlify deploy --dir ./build --prod
```
