# Веб-приложение для мониторинга политических преследований в России
# Web application for monitoring political persecution in Russia
# [English Description and Installation](#english)

[![Build and deploy political-persecutions-web](https://github.com/Political-prisoners-court-data/political-persecutions-web/actions/workflows/cicd.yml/badge.svg)](https://github.com/Political-prisoners-court-data/political-persecutions-web/actions/workflows/cicd.yml/badge.svg)

## Перед началом

1. Установите [Docker](https://docs.docker.com/get-docker/) и [Docker Compose](https://docs.docker.com/compose/install/)
2. Клонируйте репозиторий
```bash
git clone https://github.com/Political-prisoners-court-data/political-persecutions-web.git
```

## Установка: доступны 3 способа запуска

## Совместный запуск веб-приложения и базы данных MongoDB в контейнерах
#### Для тех, кто хочет увидеть конечный результат проекта в действии.
##### *(Для сетапов разработчика перейдите к [следующим разделам](#development))*
#### Docker Compose
1. Чтобы запустить проект, перейдите в корневой каталог репозитория:

```bash
cd political-persecutions-web/
```
2. Выполните:
```bash
cd docker-build/
```
3. Выполните:
```bash
docker compose up --build --detach
```

4. Запустится веб-приложение и база данных в двух отдельных контейнерах и откроются порт 3000 для веб-приложения и порт 27017 для MongoDB для localhost

5. Веб-приложение доступно по адресу http://localhost:3000

##### Чтобы остановить и удалить:

```bash
cd docker-build/
```

```bash
docker compose down
```
## <a id="development"></a>Запуск MongoDB контейнера и локальной среды веб интерфейса

#### Удобно для веб-разработчиков, чтобы запустить готовый экземпляр MongoDB с тестовыми данными и погрузиться в [локальную веб-разработку](#web-start):
#### Docker Compose
1. Перейдите в каталог:

```bash
cd docker-build/mongodb/
```

2. Выполните:

```bash
docker compose up --build --detach
```

3. MongoDB запущена и работает по адресу _localhost:27017_. Подключиться к ней можно с mongosh:

```bash
mongosh -u "app" -p "app" eventsDb --authenticationDatabase "admin"
```

#### Альтернативный способ - Docker

1. Перейдите в каталог:

```bash
cd docker-build/mongodb
```

2. Соберите образ docker:

```bash
docker build -t persecutions-mongodb .
```

3. Выполните _docker run_:

```bash
docker run -d -p 27017:27017 --name persecutions-mongodb persecutions-mongodb
```

4. MongoDB запущена и работает по адресу _localhost:27017_. Подключиться к ней можно с помощью mongosh:

```bash
mongosh -u "app" -p "app" eventsDb --authenticationDatabase "admin"
```

#### Удалить MongoDB standalone:

##### Docker Compose

```bash
cd docker-build/mongodb/
```

```bash
docker compose down
```

##### Для варианта Docker

```bash
docker rm -f persecutions-mongodb
```

```bash
docker rmi -f persecutions-mongodb
```

### <a id="web-start"></a>*Запуск локального веб-интерфейса*

##### Проект построен на базе Next.js, кастомные команды сборки и запуска доступны в файле [package.json](package.json) 

Частые команды:
<li>Запуск локального dev инстанса</li>

```bash
npm run dev
```
<li>Сборка и запуск проекта под prod</li>

```bash
npm run preview
```

<li>Сборка</li>

```bash
npm run build
```

<li>Запустить последнюю сборку</li>

```bash
npm run start
```

## Запустить только контейнер веб-приложений

#### Пригодится для разработчиков баз данных, чтобы запустить веб-приложение из контейнера в качестве витрины и конфигурировать подключаемые узлы MongoDB, указывая локальные или удаленные подключения к базе данных.
#### Docker Compose

1. Перейдите в каталог:

```bash
cd docker-build/persecutions-web/
```

2. Укажите переменную среды **DATABASE_URL** в файле _compose.yaml_

3. Выполните:

```bash
docker compose up --build --detach
```

3. Веб запущен и работает по адресу http://localhost:3000

#### Альтернативный способ - Docker

1. Перейдите в корневой каталог репозитория:

```bash
cd political-persecutions-web/
```

2. Соберите образ docker:

```bash
docker build -t persecutions-web --build-arg NEXT_PUBLIC_CLIENTVAR=clientvar -f docker-build/persecutions-web/Dockerfile .
```

3. Выполните _docker run_ с открытием локальных портов  (включая 27017) внутри контейнера:

```bash
docker run -d \
-p 3000:3000 \
-e DATABASE_URL="mongodb://app:app@host.docker.internal:27017/eventsDb?authSource=admin" \
--add-host host.docker.internal:host-gateway \
--name persecutions-web \
persecutions-web
```

4. Веб-приложение доступно по адресу http://localhost:3000

#### Удалить контейнер веб-приложения:

##### Docker Compose

```bash
cd docker-build/persecutions-web/
```

```bash
docker compose down
```

##### Для варианта Docker

```bash
docker rm -f persecutions-web
```

```bash
docker rmi -f persecutions-web
```
# <a id="english"></a>English Description and Installation
# Web application for monitoring political persecution in Russia

## Prerequisites

1. Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
2. Clone the repository

```bash
git clone https://github.com/Political-prisoners-court-data/political-persecutions-web.git
```

## Installation: 3 ways to run are available

## Run Web application and MongoDB Database together
#### For those who want to see final result of the project in action.
##### *(For developer setups go to the [next sections](#development-eng))*
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
## <a id="development-eng"></a>Run MongoDB container and local dev environment

#### Mainly for Web developers to start a ready instance of MongoDB with mock data and dive into [local web development](#web-start-eng):
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


### <a id="web-start-eng"></a>*Local web interface run*

##### Project is built on Next.js, custom build and run commands are available in [package.json](package.json)

Frequent commands:
<li>Run local dev instance</li>

```bash
npm run dev
```
<li>Build and run project in a production mode</li>

```bash
npm run preview
```

<li>Build</li>

```bash
npm run build
```

<li>Run last build</li>

```bash
npm run start
```

## Run only Web application container

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
