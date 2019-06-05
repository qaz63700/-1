var express = require("express");
var User = require("./models/user");
var passport = require("passport");
var router = express.Router();
function ensureAuthenticated(req, res, next) {
    // 一个Passport提供的函数
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash("info", "You must be logged in to see this page.");
        res.redirect("/login");
    }
}

router.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.errors = req.flash("error");
    res.locals.infos = req.flash("info");
    next();
});
router.get("/login", function(req, res) {
    res.render("login");
});
var passport = require("passport");
router.get("/signup", function(req, res) {
    res.render("signup");
});
router.post("/login", passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true 
}));
router.get("/edit", ensureAuthenticated, function(req, res) {
    res.render("edit");
});
router.get("/users/:username", function(req, res, next) {
    User.findOne({ username: req.params.username }, function(err, user) {
        if (err) { return next(err); }
        if (!user) { return next(404); }
        res.render("profile", { user: user });
    });
});
router.post("/edit", ensureAuthenticated, function(req, res, next) {
    req.user.displayName = req.body.displayname;
    req.user.bio = req.body.bio;
    req.user.save(function(err) {
        if (err) {
            next(err);
            return;
        }
        req.flash("info", "Profile updated!");
        res.redirect("/edit");
    });
});
router.post("/signup", function(req, res, next) {
    // 参数解析
    var username = req.body.username;
    var password = req.body.password;
    
    // 调用findOne只返回一个用户。你想在这匹配一个用户名
    User.findOne({ username: username }, function(err, user) {
        if (err) { return next(err); }
        // 判断用户是否存在
        if (user) {
            req.flash("error", "User already exists");
            return res.redirect("/signup");
        }
        // 新建用户
        var newUser = new User({
            username: username,
            password: password
        });
        // 插入记录
        newUser.save(next);
    });
    // 进行登录操作并实现重定向
}, passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
}));
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});
router.get("/", function(req, res, next) {
    User.find()
        .sort({ createdAt: "descending" })
        .exec(function(err, users) {
            if (err) { return next(err); }
            res.render("index", { users: users });
        });
});
module.exports = router;