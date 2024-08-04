const mongoose = require("mongoose");
const generate = require("../helper/generate");

const userSchema = new mongoose.Schema(
	{
		fullName: String,
		email: String,
		password: String,
		tokenUser: {
			type: String,
			default: generate.generateRadomString(20)
		},
		phone: String,
		avatar: String
	}
);

const User = mongoose.model("User", userSchema, "user");
module.exports = User;