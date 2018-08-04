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
          });

    }
  }
  render() {
    if(!localStorage.user){
      return(<div></div>);
    } else {
      var userList;
      if(localStorage.list){
        const parsedStorage = JSON.parse(localStorage.list);
        userList = parsedStorage.map((list) => {
          return <UserList listName={list} userId={JSON.parse(localStorage.user).id} key={list.id} />
      });
      } else {
        userList = function(){return(<p>You does not have any shopping lists</p>)};
      }
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
                  {userList}
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