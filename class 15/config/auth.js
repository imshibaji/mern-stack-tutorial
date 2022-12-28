const User = require('../models/users');

class Auth{
    static strategy(username, password, done) {
        console.log(username, password);
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (user.password != password) { return done(null, false); }
            return done(null, user);
        });
    }

    static serialize(user, done) {
        done(null, user.id);
    }

    static deserialize(id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    }

    static check(){
        return function(req, res, next){
            if(req.user){
                next();
            }else{
                res.redirect('/login');
            }
        }
    }

    static logout(){
        return function(req, res, next){
            // req.user = null;
            // if(req.user){
                // next();
            // }else{
                // res.redirect('/login');
            // }
            req.logout(function(err) {
                if (err) { return next(err); }
                res.redirect('/login');
            });
        }
    }

}

module.exports = Auth;

