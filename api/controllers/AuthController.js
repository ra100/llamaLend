/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require("waterlock").waterlocked({

  login: function (req, res) {
    var scope = require("waterlock-local-auth/lib/scope")(waterlock.Auth, waterlock.engine);
    var params = req.params.all();

    if (typeof params[scope.type] === "undefined" || typeof params.password === "undefined") {
      waterlock.cycle.loginFailure(req, res, null, {
        error: req.__("auth.invalid.login", req.__("auth." + scope.type)),
        target: "Password"
      });
    } else {
      var pass = params.password;
      scope.getUserAuthObject(params, req, function (err, user) {
        if (err) {
          return res.serverError(err);
        }
        if (user) {
          if (bcrypt.compareSync(pass, user.auth.password)) {
            waterlock.cycle.loginSuccess(req, res, user);
          } else {
            waterlock.cycle.loginFailure(req, res, user, {
              error: req.__("auth.invalid.login", req.__("auth." + scope.type)),
              target: "Password"
            });
          }
        } else {
          //TODO redirect to register
          waterlock.cycle.loginFailure(req, res, null, {
            error: req.__("auth.invalid.user"),
            target: "Login"
          });
        }
      });
    }
  }
});
