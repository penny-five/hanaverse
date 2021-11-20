# hanaverse-client

React & react-konva app

## Local development with yarn

Local development in http://localhost:3000

```
yarn start
```

## Local docker image for docker-compose

Build docker container

```
docker build -t hanaverse-client .
```

Test container locally in http://localhost:8000

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

Deploy built site to Netlify https://hanaverse-client.netlify.app/

```
netlify deploy --dir ./build --prod
```
