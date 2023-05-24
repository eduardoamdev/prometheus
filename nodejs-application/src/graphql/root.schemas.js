const { mergeSchemas } = require("@graphql-tools/schema");
const endpointSchema = require("./endpoint");

const schema = mergeSchemas({
  schemas: [endpointSchema],
});

module.exports = schema;
