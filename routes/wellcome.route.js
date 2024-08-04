const express = require("express");
const router = express.Router();
const controller = require("../controller/wellcome.controller");

router.get("/", controller.wellcome);

module.exports = router;