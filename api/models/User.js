/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    // display name
    name: {
      type: 'string'
    },

    // login name
    login: {
      type: 'string'
    },

    // hashed password
    password: {
      type: 'string'
    },

    // user email
    email: {
      type: 'string',
      email: true
    },

    // images user uploaded
    images: {
      collection: 'image',
      via: 'owner'
    },

    // only one avatar for user
    avatar: {
      model: 'image'
    },

    // tools user owns
    tools: {
      collection: 'tool',
      via: 'owner'
    },

    // which tools user has now
    has: {
      collection: 'tool',
      via: 'location'
    }
  },


  // Lifecycle Callbacks
  beforeCreate: function (values, cb) {

    // Encrypt password
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      values.password = hash;
      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  }
};
