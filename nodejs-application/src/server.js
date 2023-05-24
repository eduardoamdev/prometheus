const express = require("express");
const client = require("prom-client");
const apollo = require("./graphql");

const PORT = 5000;
const HOST = "0.0.0.0";

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

const registerRequest = (req, res, next) => {
  visitsGauge.inc();
  next();
};

const app = express();

apollo(app);

app.get("/checkNumber/:number", registerRequest, (req, res) => {
  const { number } = req.params;
  try {
    if (parseInt(number)) {
      successGauge.inc();
      res.status(200).json({
        success: true,
        message: `${number} is a number`,
      });
    } else {
      throw new Error(`${number} is not a number`);
    }
  } catch (error) {
    errorGauge.inc();
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

app.get("/metrics", (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(client.register.metrics());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
