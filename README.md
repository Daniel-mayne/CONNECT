# backend

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Create container with MySQL
$ docker-compose up -d



# install dependencies
$ npm install
$ npm install luxon


# Create database structure
$ node ace migration:run
# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start


