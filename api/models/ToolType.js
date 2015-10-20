/**
 * ToolType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    icon: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    tools: {
      collection: 'Tool',
      via: 'type'
    }

  }
};
