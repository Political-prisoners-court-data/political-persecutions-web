# Web application for monitoring of political persecution in Russia



[![Build and deploy political-persecutions-web](https://github.com/Political-prisoners-court-data/political-persecutions-web/actions/workflows/cicd.yml/badge.svg)](https://github.com/Political-prisoners-court-data/political-persecutions-web/actions/workflows/cicd.yml/badge.svg)

## Prerequisites

1. Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
2. Clone the repository

```bash
git clone https://github.com/Political-prisoners-court-data/political-persecutions-web.git
```

## Installation: 3 ways to run are available

### Run Web application and MongoDB Database together
#### For those who want to see final result of the project in action.
##### *(For developer setups go to the next sections)*
#### Docker Compose
1. To start up the project, go to the root directory of the repository:

```bash
cd political-persecutions-web/
```
2. Execute:
```bash
cd docker-build/
```
3. Execute:
```bash
docker compose up --build --detach
```

4. It will start web application and database together in two separate containers and will expose port 3000 for web application and port 27017 for MongoDB to localhost

5. Web application is available at http://localhost:3000

##### To stop and delete:

```bash
cd docker-build/
```

```bash
docker compose down
```
### Run only MongoDB container

#### Mainly for Web developers to start a ready instance of MongoDB with mock data and dive into local web development:
#### Docker Compose
1. Switch to directory:

```bash
cd docker-build/mongodb/
```

2. Execute:

```bash
docker compose up --build --detach
```

3. MongoDB is up and running at _localhost:27017_. You can connect to it with mongo shell:

```bash
mongosh -u "app" -p "app" eventsDb --authenticationDatabase "admin"
```

#### Alternative run option - Docker

1. Switch to directory:

```bash
cd docker-build/mongodb
```

2. Build docker image:

```bash
docker build -t persecutions-mongodb .
```

3. Execute _docker run_:

```bash
docker run -d -p 27017:27017 --name persecutions-mongodb persecutions-mongodb
```

4. MongoDB is up and running at _localhost:27017_. You can connect to it with mongo shell:

```bash
mongosh -u "app" -p "app" eventsDb --authenticationDatabase "admin"
```

#### Delete MongoDB standalone:

##### Docker Compose

```bash
cd docker-build/mongodb/
```

```bash
docker compose down
```

##### For Docker choice

```bash
docker rm -f persecutions-mongodb
```

```bash
docker rmi -f persecutions-mongodb
```

### Run only Web application container.

#### Mainly for DB developers to showcase web app from container and be flexible in specifying MongoDB instance to work with. This way we are specifying local or remote database connection (for managed or self-hosted MongoDB).
#### Docker Compose

1. Switch to directory:

```bash
cd docker-build/persecutions-web/
```

2. Specify **DATABASE_URL** environment variable in _compose.yaml_ file

3. Execute:

```bash
docker compose up --build --detach
```

3. Web is up and running at http://localhost:3000

#### Alternative run option - Docker

1. Go to the root directory of the repository:

```bash
cd political-persecutions-web/
```

2. Build docker image:

```bash
docker build -t persecutions-web --build-arg NEXT_PUBLIC_CLIENTVAR=clientvar -f docker-build/persecutions-web/Dockerfile .
```

3. Execute _docker run_ with enabling localhost ports (including 27017) inside container:

```bash
docker run -d \
    -p 3000:3000 \
    -e DATABASE_URL="mongodb://app:app@host.docker.internal:27017/eventsDb?authSource=admin" \
    --add-host host.docker.internal:host-gateway \
    --name persecutions-web \
    persecutions-web
```

4. Web application is available at http://localhost:3000

#### Delete Web App standalone:

##### Docker Compose

```bash
cd docker-build/persecutions-web/
```

```bash
docker compose down
```

##### For Docker choice

```bash
docker rm -f persecutions-web
```

```bash
docker rmi -f persecutions-web
```
