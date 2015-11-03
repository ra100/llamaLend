import React from 'react';
import i18n from "i18n";
import {FlatButton} from "material-ui";

const LoginButton = React.createClass({

  text: {
    login: "login"
  },

  render: function() {
    return (
      <FlatButton label={this.text.login}/>
    );
  }
});

module.exports = LoginButton;
