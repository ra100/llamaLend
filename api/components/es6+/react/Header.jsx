import React from "react";
import i18n from "i18n";
import {AppBar, IconButton} from "material-ui";
import MoreHoriz from "material-ui/lib/svg-icons/navigation/more-horiz";
import ThemeManager from "material-ui/lib/styles/theme-manager";
import Theme from "./Theme";
import LoginButton from "./LoginButton";


const Header = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  },

  render: function () {
    return (
      <AppBar title="LlamaLend"
          iconElementLeft={<IconButton><MoreHoriz /></IconButton>}
          iconElementRight={<LoginButton/>}/>
    );
  }
});

module.exports = Header;