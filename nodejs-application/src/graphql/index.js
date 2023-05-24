const { ApolloServer } = require("apollo-server-express");
const schema = require("./root.schemas");

const start = async (app, config) => {
  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });
};

module.exports = start;
