/**
* ToolHistory.js
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
      
      action: {
          type: 'string',
          enum: ['borrow', 'return', 'give', 'lose']
      },

      message: {
          type: 'string'
      },

      tool: {
          model: 'Tool'
      },

      from: {
          model: 'User'
      },

      to: {
          model: 'User'
      },

      date: {
          type: 'datetime'
      }
  }
};

