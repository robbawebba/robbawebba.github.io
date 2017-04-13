import React, { PropTypes } from 'react'
import Nav from './nav'
import AppBar from 'material-ui/AppBar';

const Container = React.createClass({
  render () {
    return (
      <div>
        <AppBar
          title="Rob Weber"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <Nav />
        {this.props.children}
      </div>

    )
  }
})

export default Container
