/**
 * waterlock
 *
 * defines various options used by waterlock
 * for more informaiton checkout
 *
 * http://waterlock.ninja/documentation
 */
module.exports.waterlock = {

  // Base URL
  //
  // used by auth methods for callback URI's using oauth and for password
  // reset links.
  baseUrl: process.env.BASE_URL || 'http://localhost:1337',

  // Auth Method(s)
  //
  // this can be a single string, an object, or an array of objects for your
  // chosen auth method(s) you will need to see the individual module's README
  // file for more information on the attributes necessary. This is an example
  // of the local authentication method with password reset tokens disabled.
  authMethod: [{
      name: 'waterlock-local-auth',
      passwordReset: {
        tokens: false,
        mail: {
          protocol: 'SMTP',
          options: {
            service: 'Gmail',
            auth: {
              user: process.env.GMAIL_EMAIL,
              pass: process.env.GMAIL_PASS
            }
          },
          from: process.env.GMAIL_EMAIL,
          subject: 'Your password reset!',
          forwardUrl: process.env.BASE_URL
        },
        template: {
          file: '../views/email.jade',
          vars: {}
        }
      },
      createOnNotFound: true
    },
    {
      name: 'waterlock-google-auth',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //   allow: ['DOMAIN', 'USER@DOMAIN'],
      //   redirectUri: 'redirectUri'
      fieldMap: {
        // <model-field>: <google-field>,
        'firstName': 'given_name',
        'lastName': 'family_name',
        'email': 'email'
      }
    },
    {
      name: "waterlock-facebook-auth",
      appId: process.env.FACEBOOK_APP_ID,
      appSecret: process.env.FACEBOOK_APP_SECRET,
      //   redirectUri: 'redirectUri'
      fieldMap: {
        // <model-field>: <facebook-field>,
        'firstName': 'first_name',
        'lastName': 'last_name',
        'email': 'email'
      }
    }
  ],

  pluralizeEndpoints: true,

  // JSON Web Tokens
  //
  // this provides waterlock with basic information to build your tokens,
  // these tokens are used for authentication, password reset,
  // and anything else you can imagine
  jsonWebTokens: {

    // CHANGE THIS SECRET
    secret: process.env.JWT_SECRET,
    expiry: {
      unit: 'days',
      length: '7'
    },
    audience: process.env.APP_NAME,
    subject: 'subject',

    // tracks jwt usage if set to true
    trackUsage: true,

    // if set to false will authenticate the
    // express session object and attach the
    // user to it during the hasJsonWebToken
    // middleware
    stateless: false,

    // set the name of the jwt token property
    // in the JSON response
    tokenProperty: 'token',

    // set the name of the expires property
    // in the JSON response
    expiresProperty: 'expires',

    // configure whether or not to include
    // the user in the respnse - this is useful if
    // JWT is the default response for succesfull login
    includeUserInJwtResponse: true
  },

  // Post Actions
  //
  // Lets waterlock know how to handle different login/logout
  // attempt outcomes.
  postActions: {

    // post login event
    login: {

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      success: 'default',

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      failure: 'default'
    },

    //post logout event
    logout: {

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      success: 'default',

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      failure: 'default'
    },
    // post register event
    register: {
      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      success: 'default',
      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      failure: 'default'
    }
  }
};
