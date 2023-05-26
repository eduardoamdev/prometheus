const express = require("express");
const { client } = require("../utils/metrics");

const router = express.Router();

router.get("/", (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(client.register.metrics());
});

module.exports = router;
