/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({

    attributes: {

      // display name
      name: {
        type: 'string',
        required: true
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
        collection: 'Image',
        via: 'owner'
      },

      // only one avatar for user
      avatar: {
        model: 'Image'
      },

      // tools user owns
      tools: {
        collection: 'Tool',
        via: 'owner'
      },

      // which tools user has now
      has: {
        collection: 'Tool',
        via: 'location'
      }
    },
  }),

  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
