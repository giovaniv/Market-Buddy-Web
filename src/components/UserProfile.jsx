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

class UserProfile extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    console.log("here");
    if(!localStorage.user){
       this.props.history.push({
            pathname: '/login'
          })
    }
  }

  render() {
    if(!localStorage.user){
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
                    <div className="card small blue-cl">
                      <div className="card-action">
                        <span className="card-title">Movie snacks</span>
                        <a href="#"><i className="material-icons right">more_vert</i></a>
                      </div>
                    </div>
                  <div className="card small blue-cl">
                    <div className="card-action">
                      <span className="card-title">Barbecue</span>
                      <a href="#"><i className="material-icons right">more_vert</i></a>
                    </div>
                  </div>
                  <div className="card small blue-cl">
                    <div className="card-action">
                      <span className="card-title">Last week</span>
                      <a href="#"><i className="material-icons right">more_vert</i></a>
                    </div>
                  </div>
                  <div className="card small blue-cl">
                    <div className="card-action">
                      <span className="card-title">Birthday party</span>
                      <a href="#"><i className="material-icons right">more_vert</i></a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="page-footer">
          <h5 className="icon-footer"><i className="material-icons">shopping_cart</i>Market Buddy</h5>
          <p className="footer-copy">© 2018 Market Buddy</p>
        </footer>
    </div>

     )
    }
  }

}
export default withRouter(UserProfile);




