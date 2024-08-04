const express = require("express");
var path = require('path');
var methodOverride = require('method-override');
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser");

var bodyParser = require('body-parser');
const database = require("./config/database");
database.connect();

const route = require("./routes/index.route");

app.use(cookieParser('truongnv'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }))

route(app);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})