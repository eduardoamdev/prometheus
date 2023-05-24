const { gqlGauge } = require("../../../metrics/prometheus");

const endpoint = async () => {
  gqlGauge.inc();
  return { message: "GQL works!!!" };
};

const endpointResolver = {
  Query: {
    endpoint,
  },
};

module.exports = { endpointResolver };
