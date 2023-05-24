const client = require("prom-client");

const visitsGauge = new client.Gauge({
  name: "number_of_requests",
  help: "Number of requests to this server",
});

const successGauge = new client.Gauge({
  name: "number_of_successfull_requests",
  help: "Number of successfull requests to this server",
});

const errorGauge = new client.Gauge({
  name: "number_of_not_successfull_requests",
  help: "Number of not successfull requests to this server",
});

const gqlGauge = new client.Gauge({
  name: "number_of_gql_requests",
  help: "Number of gql requests to this server",
});

module.exports = { visitsGauge, successGauge, errorGauge, gqlGauge };
