const express = require("express");
const { gauge } = require("../utils/metrics");
const { APP_ID } = require("../utils/constants");

const router = express.Router();

router.get("/:number", (req, res) => {
  const { number } = req.params;
  try {
    if (parseInt(number)) {
      gauge.inc({
        type: "number_of_successful_rest_requests",
        app: APP_ID,
      });
      res.status(200).json({
        success: true,
        message: `${number} is a number`,
      });
    } else {
      throw new Error(`${number} is not a number`);
    }
  } catch (error) {
    gauge.inc({
      type: "number_of_not_successful_rest_requests",
      app: APP_ID,
    });
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
