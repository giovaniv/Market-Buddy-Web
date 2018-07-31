import React, {Component} from 'react';
import NavBar from './components/NavBar.jsx';
import UserProfile from './components/UserProfile.jsx';
import ShowLists from './components/Showlists.jsx';
import ViewList from './components/ViewList.jsx';
import Register from './components/Register.jsx'

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/register",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      turtles: [],
      cookies: null,
      testLists: ["Movie Night", "Camping", "Something Healthy"]
    };
  }

  handleThatOneButton() {
    fetch('/turtles').then(d => d.json()).then(b => {
      this.setState({turtles: b.turtles})
    }).catch(err => console.warn(err))
  }

  render() {

    const { testLists } = this.state;

    return (
      <Router>
        <div>
          <button onClick={this.handleThatOneButton.bind(this)}>Click this</button>
          {
            this.state.turtles &&
            <table>
              <tbody>
                {this.state.turtles.map(turtle => <tr><td>{turtle}</td></tr>)}
              </tbody>
            </table>
          }

          <div>
            <Route path="/" component={NavBar} />
          </div>

          <Route path="/user_id" exact={true} render={() => <UserProfile />} />
          <Route path="/user_id/lists"  render={() => <ShowLists test={testLists}/>}/>
          <Route path="/user_id/list_id"  render={() => <ViewList/>} />
        <Route exact path="/register" render={() => <Register />} />

        </div>
      </Router>
    );
  }
}
export default App;
