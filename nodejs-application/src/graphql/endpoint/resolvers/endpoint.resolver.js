const { gauge } = require("../../../metrics/prometheus");

const endpoint = async () => {
  gauge.inc({ app: "nodejs_application", type: "number_of_gql_requests" });
  return { message: "GQL works!!!" };
};

const endpointResolver = {
  Query: {
    endpoint,
  },
};

module.exports = { endpointResolver };
