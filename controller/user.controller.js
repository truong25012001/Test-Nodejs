 const User = require("../model/user.model");

module.exports.listUser = async(req, res) => {
	try {
		const users = await User.find();
		res.json({
			message: "Danh sách users",
			users: users
		})
	} catch (error) {
		res.json({
			code: 400,
			message: "Lấy danh sách không thành công!!",
		})
	}
}

module.exports.createPost = async (req, res) => {
	const checkMail = await User.findOne({
		email: req.body.email
	});

	if (checkMail) {
		res.json({
			code: 400,
			message: "Email đã tồn tại"
		})
	} else {
		const record = new User(req.body);
		await record.save();
		res.json({
			code: 200,
			message: "Lưu thành công"
		})
	}

}

