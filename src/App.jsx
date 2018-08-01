import React, {Component} from 'react';
import NavBar from './components/NavBar.jsx';
import UserProfile from './components/UserProfile.jsx';
import ShowLists from './components/Showlists.jsx';
import ViewList from './components/ViewList.jsx';
import Register from './components/Register.jsx'
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Main from './components/Main.jsx';
// import { withCookies, Cookies } from 'react-cookie'


// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    // const { cookies } = props;
    this.state = {
      turtles: [],
      // currUser: cookies.get('session') || null,
      currUser: localStorage.getItem('user_id'),
      testLists: ["Movie Night", "Camping", "Something Healthy"]
    };
    this.setCurrUser = this.setCurrUser.bind(this);
    // this.logout = this.logout.bind(this);
    // console.log(this.state.currUser);

  }

  // logout() {
  //   console.log("logging out");
  //   return <Logout setCurrUser={this.setCurrUser } />;
  // }

  handleThatOneButton() {
    fetch('/turtles').then(d => d.json()).then(b => {
      this.setState({turtles: b.turtles})
    }).catch(err => console.warn(err))
  }

  setCurrUser(user){
    this.setState( {currUser: user} );
  }
  

  render() {
 // <Route exact path="/register" component={Register} />
    const { testLists } = this.state;

    return (
      <Router>
          {/* <div>
            <Route path="/" render={() => <NavBar currUser={this.state.currUser} />} />
          </div> */}
          
          <div>
          <Route path="/main" component={Main} />
          <Route path="/user_id" exact={true} render={() => <UserProfile currUser={this.state.currUser} />} />
          <Route path="/user_id/lists" render={() => <ShowLists test={testLists}/>} />
          <Route path="/user_id/list_id" render={() => <ViewList/>} />
          <Route path="/register" render={()=><Register setCurrUser={this.setCurrUser} />}/>
          <Route path="/login" render={()=><Login setCurrUser={this.setCurrUser} /> } />
          <Route path="/logout" render={() => <Logout/>} setCurrUser={this.setCurrUser} />

          </div>
      </Router>
    );
  }
}
// export default withCookies(App);
export default App;
