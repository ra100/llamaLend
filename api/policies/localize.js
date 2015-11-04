/**
 * localize
 *
 * @module      :: Policy
 * @description :: Sets language from cookie
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
 module.exports = function(req, res, next) {
   req.setLocale(req.cookies.language);
   next();
 };
