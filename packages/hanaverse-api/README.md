# hanaverse-api

Kotlin Spring Boot app

## Local development with gradle

Local development

```
./gradlew run
```

## Local docker image for docker-compose

Build docker container

```
docker build -t hanaverse-api .
```

Test container locally

```
docker run -p 3000:3000 -it --rm hanaverse-api
```

## Deploy to Netlify

Build api

```
gradle build
```
