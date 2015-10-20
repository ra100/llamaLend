/**
 * Tool.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    status: {
      model: 'ToolStatus'
    },

    images: {
      collection: 'Image',
      via: 'tool'
    },

    type: {
      model: 'ToolType'
    },

    owner: {
      model: 'user'
    },

    // who has the tool right now
    location: {
      model: 'user'
    }
  }
};
