import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Container from './components/container'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Home = () => <h1>Hello from Home!</h1>
const About = () => <h1>We are located at 555 Jackson St.</h1>

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    )
  }
}

render(<App />, document.getElementById('app'))
