# https://mherman.org/blog/dockerizing-a-react-app/
# build environment
FROM node:14-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn -s
RUN yarn add react-scripts@4.0.3 -g -s
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
ARG PORT=80
EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]
