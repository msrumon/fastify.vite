# App

## Start

```bash
docker build --tag app . && docker run --publish 8080:8080 --name app app
```

## Stop

```bash
docker stop app && docker rm app && docker rmi app
```
