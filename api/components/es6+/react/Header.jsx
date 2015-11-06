import React from "react";
import {AppBar, IconButton} from "material-ui";
import ChevronRight from "material-ui/lib/svg-icons/navigation/chevron-right";
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";

class Header extends React.Component {
  render () {
    return (
      <AppBar title="LlamaLend" iconElementLeft={<IconButton><ChevronRight /></IconButton>}/>
    );
  }
};

module.exports = Header;