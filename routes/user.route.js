const express = require("express");
const router = express.Router();
const controller = require("../controller/user.controller");
const validate = require("../validate/user.validate");
const middleware = require("../middlewares/auth.middleware");

router.get("/", middleware.requireAuth, controller.listUser);
router.post("/create",
	validate.createPost,
	controller.createPost
);

module.exports = router;