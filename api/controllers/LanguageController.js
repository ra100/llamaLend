/**
 * LanguageController
 *
 * @description :: Server-side logic for managing languages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `LanguageController.get()`
   */
  get: function (req, res) {
    return res.json({
      language: req.getLocale()
    });
  },


  /**
   * `LanguageController.set()`
   * sets locale for session, saves change to cookie
   */
  set: function (req, res) {
    var locale = req.query.code;
    var locales = sails.config.i18n.locales;
    var out = {
      update: false,
      locale: req.getLocale()
    };
    if (locale != null) {
      if (locale != req.getLocale()) {
        if (locales.indexOf(locale) < 0) {
          out.message = req.__("locale.invalid");
        } else {
          req.setLocale(locale);
		  res.cookie("language", locale);
          out.update = true;
          out.message = req.__("locale.ok");
		  out.locale = locale;
        }
      } else {
        out.message = req.__("locale.notChanged");
      }
    } else {
      out.message = req.__("locale.notSet");
    }
    return res.json(out);
  }
};
