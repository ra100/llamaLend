import React from "react";
import {AppBar, IconButton} from "material-ui";
import MoreHoriz from "material-ui/lib/svg-icons/navigation/more-horiz";
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";

class Header extends React.Component {
  click () {
    console.log("click");
  }
  
  render () {
    return (
      <div>
        <AppBar title="LlamaLend" iconElementLeft={<IconButton><MoreHoriz /></IconButton>} iconElementRight={<LoginButton/>} onRightIconButtonTouchTap={this.click}/>
      </div>
    );
  }
};

module.exports = Header;