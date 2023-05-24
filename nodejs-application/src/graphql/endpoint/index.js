const { makeExecutableSchema } = require("@graphql-tools/schema");
const { endpointSchema } = require("./schemas/endpoint.schema");
const { endpointResolver } = require("./resolvers/endpoint.resolver");

const schema = makeExecutableSchema({
  typeDefs: endpointSchema,
  resolvers: endpointResolver,
});

module.exports = schema;
