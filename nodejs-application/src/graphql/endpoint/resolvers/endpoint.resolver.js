const endpoint = async () => {
  return { message: "GQL works!!!" };
};

const endpointResolver = {
  Query: {
    endpoint,
  },
};

module.exports = { endpointResolver };
