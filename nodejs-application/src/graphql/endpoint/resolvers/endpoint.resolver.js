const { gauge } = require("../../../utils/metrics");
const { APP_ID } = require("../../../utils/constants");

const endpoint = async () => {
  gauge.inc({ type: "number_of_gql_requests", app: APP_ID });
  return { message: "GQL works!!!" };
};

const endpointResolver = {
  Query: {
    endpoint,
  },
};

module.exports = { endpointResolver };
