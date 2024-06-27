var express = require("express");
var router = express.Router();
var logger = require("../utils/logger");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res, next) {
  // console.log(req.body);
  logger.info(req.ip);
  res.redirect("https://naver.com");
});

module.exports = router;
