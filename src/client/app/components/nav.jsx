import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render () {
    return (
      <div>
        <Drawer open={this.state.open}>
          <MenuItem><Link to='/'>Home</Link></MenuItem>
          <MenuItem><Link to='/about'>About</Link></MenuItem>
        </Drawer>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
      </div>

    )
  }
}

export default Nav
