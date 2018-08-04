import React, {Component} from 'react';
import UserProfile from './components/UserProfile.jsx';
import ShowLists from './components/Showlists.jsx';
import ViewList from './components/ViewList.jsx';
import Register from './components/Register.jsx'
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Main from './components/Main.jsx';
import Warning from './components/Warning.jsx';


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
    this.state = {
      turtles: [],
      currUser: localStorage.getItem('user_id'),
      testLists: ["Movie Night", "Camping", "Something Healthy"]
    };
    this.setCurrUser = this.setCurrUser.bind(this);

  }

  setCurrUser(user){
    this.setState( {currUser: user} );

  }


  render() {
      return (
        <Router>
            <div>
                {localStorage.user ? (
                  <Switch>
                    <Route path="/main" exact component={Main} />
                    <Route path="/users/:id" exact render={() => <UserProfile/>} />
                    <Route path="/user_id/list_id" exact render={() => <ViewList/>} />
                    <Route path="/users/:id/list/new" render={() => <ViewList/>} />
                    <Route path="/logout" render={() => <Logout/>} setCurrUser={this.setCurrUser} />
                    <Route path="/warning" component={Warning} />
                    <Redirect from="/*" to="/warning" />
                    {/*<Redirect from="/*" to={`/user/${JSON.parse(localStorage.user).id}`} />*/}

                  </Switch>
                ) : (
                  <Switch>
                    <Route path="/main" exact component={Main} />
                    <Route path="/register" exact render={()=><Register setCurrUser={this.setCurrUser} />}/>
                    <Route path="/login" exact render={()=><Login setCurrUser={this.setCurrUser} /> } />
                    <Route path="/warning" component={Warning} />
                    <Redirect from="/*" to="/warning" />
                  </Switch>

                )}
            </div>
        </Router>
      )
    }
    // else {
    //   console.log("User is not logged in");
    //   return (
    //     <Router>
    //         <div>
    //           <Switch>
    //             <Route path="/main" exact component={Main} />
    //             <Route path="/register" exact render={()=><Register setCurrUser={this.setCurrUser} />}/>
    //             <Route path="/login" exact render={()=><Login setCurrUser={this.setCurrUser} /> } />
    //             <Redirect from="/*" to="/login" />
    //           </Switch>
    //         </div>
    //     </Router>
    //   )
    // }
  //}
}

export default App;




