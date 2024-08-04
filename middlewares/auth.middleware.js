const User = require("../model/user.model");
module.exports.requireAuth = async (req, res, next) => {
	if(!req.cookies.tokenUser){
		res.json({
			message: "Bạn chưa có quyền"
		})
	} else {
		const user = await User.findOne({
			tokenUser: req.cookies.tokenUser,
			
		}).select("-password");
		if(!user){
			res.json({
				message: "Bạn chưa có quyền"
			})
		} else {
			next();
		}
	}
}