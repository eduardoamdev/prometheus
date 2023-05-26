const express = require("express");
const apollo = require("./graphql");
const checkNumberRouter = require("./routes/checkNumber");
const metrics = require("./routes/metrics");
const { registerRestRequest } = require("./middlewares/registerRestRequest");

const port = 5000;

const app = express();

apollo(app);

app.use("/checkNumber", registerRestRequest, checkNumberRouter);

app.use("/metrics", metrics);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
