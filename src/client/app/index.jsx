import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const Home = () => <h1>Hello from Home!</h1>
const About = () => <h1>We are located at 555 Jackson St.</h1>

class App extends Component {
  render() {
    <Router history={hashHistory}>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </Router>
  }
}

render(<App />, document.getElementById('app'))
