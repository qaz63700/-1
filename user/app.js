var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash");
var passport = require("passport");
var session = require("express-session");
var routes = require("./routes");
var app = express();
var bodyParser = require("body-parser");
var setUpPassport = require("./setuppassport");
app.use(bodyParser.urlencoded({ extended: false }));
// 连接到你MongoDB服务器的test数据库
mongoose.connect("mongodb://localhost:27017/test");
setUpPassport();
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(routes);

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
});