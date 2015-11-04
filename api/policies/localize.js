/**
 * localize
 *
 * @module      :: Policy
 * @description :: sets language for request
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
 module.exports = function(req, res, next) {
   req.setLocale(req.cookies.language);
   next();
 };
