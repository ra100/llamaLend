/**
 * Image.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true
    },

    owner: {
      model: 'User',
      required: true
    },

    tool: {
      model: 'Tool'
    },

    avatar: {
      model: 'User'
    }
  }
};
