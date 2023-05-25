const client = require("prom-client");

const register = new client.Registry();

register.setDefaultLabels({
  app: "nodejs_application",
});

client.collectDefaultMetrics({ register });

const visitsGauge = new client.Gauge({
  name: "number_of_requests",
  help: "Number of requests to this server",
  registers: [register],
});

const successGauge = new client.Gauge({
  name: "number_of_successfull_requests",
  help: "Number of successfull requests to this server",
  registers: [register],
});

const errorGauge = new client.Gauge({
  name: "number_of_not_successfull_requests",
  help: "Number of not successfull requests to this server",
  registers: [register],
});

const gqlGauge = new client.Gauge({
  name: "number_of_gql_requests",
  help: "Number of gql requests to this server",
  registers: [register],
});

const prometheusMiddleware = async (_, res) => {
  res.set("Content-Type", register.contentType);
  res.send(await register.metrics());
};

module.exports = {
  visitsGauge,
  successGauge,
  errorGauge,
  gqlGauge,
  prometheusMiddleware,
};
