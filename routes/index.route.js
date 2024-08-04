const userRoutes = require("./user.route");
const wellcomRoutes = requỉe("./wellcome.route");
module.exports = (app) => {
	app.use("/users",
		userRoutes
	);
	app.use("/",
		wellcomRoutes
	);
}