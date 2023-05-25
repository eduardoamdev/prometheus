const express = require("express");
const apollo = require("./graphql");
const client = require("prom-client");
const { gauge } = require("./metrics/prometheus");

const PORT = 5000;
const HOST = "0.0.0.0";

const registerRestRequest = (req, res, next) => {
  gauge.inc({ app: "nodejs_application", type: "number_of_rest_requests" });
  next();
};

const app = express();

apollo(app);

app.get("/checkNumber/:number", registerRestRequest, (req, res) => {
  const { number } = req.params;
  try {
    if (parseInt(number)) {
      gauge.inc({
        app: "nodejs_application",
        type: "number_of_successful_rest_requests",
      });
      res.status(200).json({
        success: true,
        message: `${number} is a number`,
      });
    } else {
      throw new Error(`${number} is not a number`);
    }
  } catch (error) {
    gauge.inc({
      app: "nodejs_application",
      type: "number_of_not_successful_rest_requests",
    });
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
