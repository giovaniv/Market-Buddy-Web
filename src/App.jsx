import React, {Component} from 'react';
import Test from './components/Test.jsx';
import Test1 from './components/Test1.jsx';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      turtles: []
    };
  }


  handleThatOneButton() {
    fetch('/turtles').then(d => d.json()).then(b => {
      this.setState({turtles: b.turtles})
    }).catch(err => console.warn(err))
  }

  render() {
    return (
      <Router>
        <div>
        <div>
          <h1>Hello React :)</h1>
          <button onClick={this.handleThatOneButton.bind(this)}>Click this</button>
          {
            this.state.turtles &&
            <table>
              <tbody>
                {this.state.turtles.map(turtle => <tr><td>{turtle}</td></tr>)}
              </tbody>
            </table>
          }
        </div>
        <div>
          <ul>
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/test1">Test1</Link></li>
          </ul>
        </div>
        <Route path="/test" component={Test} />
        <Route path="/test1" component={Test1} />
      </div>
      </Router>
    );
  }
}
export default App;
