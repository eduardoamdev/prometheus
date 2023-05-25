const client = require("prom-client");

const appId = "nodejs_application";

client.collectDefaultMetrics();

const gauge = new client.Gauge({
  name: `${appId}_gauge`,
  help: "nodejs_application gauge",
  labelNames: ["app", "type"],
});

module.exports = {
  gauge,
};
