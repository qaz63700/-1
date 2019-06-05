// 代码清单 8.8 models/user.js编写完成之后
var bcrypt = require("bcrypt-nodejs");
var SALT_FACTOR = 10;
var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    createdAt: {type: Date, default: Date.now },
    displayName: String,
    bio: String
});
userSchema.methods.name = function() {
    return this.displayName || this.username;
}

var noop = function() {};

userSchema.pre("save", function(done) {
    var user = this;
    if (!user.isModified("password")) {
        return done();
    }

    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if (err) { return done(err); }
        bcrypt.hash(user.password, salt, noop, 
            function(err, hashedPassword) {
                if (err) { return done(err); }
                user.password = hashedPassword;
                done();
            }
        );
    });
});
userSchema.methods.checkPassword = function(guess, done) {
    bcrypt.compare(guess, this.password, function(err, isMatch) {
        done(err, isMatch);
    });
}
var User = mongoose.model("User", userSchema);
module.exports = User;