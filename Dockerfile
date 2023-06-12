# syntax=docker/dockerfile:1
FROM node:14-alpine AS build
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

FROM build AS test
RUN npm install --only=dev
CMD ["npm", "run", "test"]

FROM test AS development
RUN apk update \
    && apk add git
CMD ["npm", "run", "start:dev"]

FROM node:14-alpine
EXPOSE 8000
COPY --from=build /app /app
CMD ["npm", "start"]
