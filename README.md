# Веб-приложение для мониторинга политических преследований в России
# Web application for monitoring of political persecutions in Russia
# [English description](README-en.md)

[![Build and deploy political-persecutions-web](https://github.com/Political-prisoners-court-data/political-persecutions-web/actions/workflows/cicd.yml/badge.svg)](https://github.com/Political-prisoners-court-data/political-persecutions-web/actions/workflows/cicd.yml/badge.svg)

## Перед началом

1. Установите [Docker](https://docs.docker.com/get-docker/) и [Docker Compose](https://docs.docker.com/compose/install/)
2. Клонируйте репозиторий
```bash
git clone https://github.com/Political-prisoners-court-data/political-persecutions-web.git
```

## Установка: доступны 3 способа запуска

### Совместный запуск веб-приложения и базы данных MongoDB
#### Для тех, кто хочет увидеть конечный результат проекта в действии.
##### *(Для сетапов разработчика перейдите к следующим разделам)*
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
### Запуск только MongoDB контейнера

#### Удобно для веб-разработчиков, чтобы запустить готовый экземпляр MongoDB с тестовыми данными и погрузиться в локальную веб-разработку:
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

### Запустить только контейнер веб-приложений.

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
