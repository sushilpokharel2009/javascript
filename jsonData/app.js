var express = require('express');
var app = express();
var server = app.listen(3000, function () {
    console.log("We have started our server on port 3000");
});


// const express = require('express'),
//     passport = require('passport'),
//     FacebookStrategy = require('passport-facebook').Strategy,
//     session = require('express-session'),
//     cookieParser = require('cookie-parser'),
//     bodyParser = require('body-parser'),
//     config = require('./configuration/config'),
//     mysql = require('mysql'),
//     app = express();

// //Define MySQL parameter in Config.js file.
// const pool = mysql.createPool({
//     host: config.host,
//     user: config.username,
//     password: config.password,
//     database: config.database
// });

// // Passport session setup.
// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (obj, done) {
//     done(null, obj);
// });


// // Use the FacebookStrategy within Passport.

// passport.use(new FacebookStrategy({
//         clientID: config.facebook_api_key,
//         clientSecret: config.facebook_api_secret,
//         callbackURL: config.callback_url
//     },
//     function (accessToken, refreshToken, profile, done) {
//         process.nextTick(function () {
//             //Check whether the User exists or not using profile.id
//             if (config.use_database) {
//                 // if sets to true
//                 pool.query("SELECT * from user_info where user_id=" + profile.id, (err, rows) => {
//                     if (err) throw err;
//                     if (rows && rows.length === 0) {
//                         console.log("There is no such user, adding now");
//                         pool.query("INSERT into user_info(user_id,user_name) VALUES('" + profile.id + "','" + profile.username + "')");
//                     } else {
//                         console.log("User already exists in database");
//                     }
//                 });
//             }
//             return done(null, profile);
//         });
//     }
// ));


// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(session({
//     secret: 'keyboard cat',
//     key: 'sid'
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(__dirname + '/public'));

// app.get('/', function (req, res) {
//     res.render('index', {
//         user: req.user
//     });
// });

// app.get('/account', ensureAuthenticated, function (req, res) {
//     res.render('account', {
//         user: req.user
//     });
// });

// app.get('/auth/facebook', passport.authenticate('facebook', {
//     scope: 'email'
// }));


// app.get('/auth/facebook/callback',
//     passport.authenticate('facebook', {
//         successRedirect: '/',
//         failureRedirect: '/login'
//     }),
//     function (req, res) {
//         res.redirect('/');
//     });

// app.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect('/');
// });


// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login')
// }

// app.listen(3000);




//******** */
// <% if (!user) { %>
//     <div style="width:500px;height:180px;">
//       <h2 style="font-size:40px;">Welcome! Please log in.</h2>
//       <a href="/auth/facebook"><img src="fb-login.jpg" width="151" height="24"></a>
//       </div>
//   <% } else { %>
//       <h2>Hello, <%= user.displayName %>.</h2>
//   <% } %>



{
    /* ******************* */
}

// <
// p > ID: < %= user.id % > < /p> <
//     p > Name: < %= user.displayName % > < /p>