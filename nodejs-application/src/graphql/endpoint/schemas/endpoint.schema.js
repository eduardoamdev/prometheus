const { gql } = require("apollo-server-express");

const endpointSchema = gql`
  type Response {
    message: String!
  }

  type Query {
    endpoint: Response
  }
`;

module.exports = { endpointSchema };
