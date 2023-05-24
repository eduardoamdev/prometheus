# Prometheus

<img src="./images/metrics.jpg" alt="metrics" />

## Descripción:

En este proyecto vamos a utilizar docker-compose para levantar una pequeña api que envíe métricas a Grafana por medio de Prometheus.

## Comandos:

### Arranque de Prometheus, Grafana y el dashboards

```sh
docker-compose up -d prometheus
docker-compose up -d grafana
docker-compose up -d grafana-dashboards
```

### Arrancar el servidor

```sh
docker-compose up -d --build nodejs-application
```

### Parar los contenedores

```sh
docker stop nodejs-application prometheus-svc prometheus_grafana_1
```

### Eliminar los contenedores

```sh
docker container rm nodejs-application prometheus-svc prometheus_grafana_1
```
