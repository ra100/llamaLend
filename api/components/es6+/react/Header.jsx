import React from "react";
import {AppBar, IconButton} from "material-ui";
import MoreHoriz from "material-ui/lib/svg-icons/navigation/more-horiz";
import LoginButton from "./LoginButton";

const Header = React.createClass({
  render () {
    return (
      <AppBar title="LlamaLend" iconElementLeft={<IconButton><MoreHoriz /></IconButton>} iconElementRight={<LoginButton/>}/>
    );
  }
});

module.exports = Header;