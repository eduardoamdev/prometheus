const { gauge } = require("../utils/metrics");
const { APP_ID } = require("../utils/constants");

const registerRestRequest = (req, res, next) => {
  gauge.inc({ type: "number_of_rest_requests", app: APP_ID });
  next();
};

module.exports = { registerRestRequest };
