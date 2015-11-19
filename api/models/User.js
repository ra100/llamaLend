var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username: {
      type: 'string',
      unique: true
    },

    email: {
      type: 'email',
      unique: true
    },

    passports: {
      collection: 'Passport',
      via: 'user'
    },

    roles: {
      collection: 'Role'
    },

    id: {
      type: 'integer',
      unique: true,
      primaryKey: true
    },

    // display name
    nick: {
      type: 'string',
      required: true
    },

    firstName: {
      type: 'string'
    },

    lastName: {
      type: 'string'
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
  }
};

module.exports = User;
