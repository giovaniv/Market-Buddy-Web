import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import UserSideBar from './UserSideBar.jsx';
import UserListHeader from './UserListHeader.jsx'
import Footer from './Footer.jsx'
import UserList from './UserList.jsx'

class UserProfile extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    if(!localStorage.user){
       this.props.history.push({
            pathname: '/login'
          })
    }
  }

  render() {
    if(!localStorage.user){
      console.log("here");
      return(<div></div>);
    } else {
      return(
        <div>
        <NavBar />
        <main>
          {/* <!-- Page Layout here --> */}
          <div className="row">
            <UserSideBar />
              <div className="col s12 m8 l9" id="right">
                <UserListHeader />
                <div className="row grid-lists">
                  <UserList listName={"Movie snacks"} />
                  <UserList listName={"Movie snacks"} />
                  <UserList listName={"Movie snacks"} />
                  <UserList listName={"Movie snacks"} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
  </div>
     )
    }
  }

}
export default withRouter(UserProfile);