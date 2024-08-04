const mongoose = require("mongoose");

module.exports.connect = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/testnodejs');
		console.log("Kết nối thành công");
	} catch (error) {
		console.log(error);
	}
}