import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from './components/container'

const Home = () => <h1>Hello from Home!</h1>
const About = () => <h1>We are located at 555 Jackson St.</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container >
            <Route exact path='/' component={Home} >
            </Route>
            <Route path='/about' component={About}>
            </Route>
          </Container>
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'))
