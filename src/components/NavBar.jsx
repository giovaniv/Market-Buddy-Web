import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {post} from 'axios';
import {
  Link
} from 'react-router-dom';

class NavBar extends Component{
  constructor(){
    super();
    this.checkingCurrUser = this.checkingCurrUser.bind(this);
  }

  checkingCurrUser(){
    if(this.props.currUser){
      return (<li><Link to="/logout">Log Out</Link></li>);
    } else {
      return (
        <div>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </div>
        );
    }
  }

  render() {
    return (
        <div>
            <h1 >I AM THE NAVBAR!</h1>
            <ul>
              <li><Link to="/user_id">Profile Page</Link></li>
              <li><Link to="/user_id/lists">Show Lists</Link></li>
              <li><Link to="/user_id/list_id">A list</Link></li>
              {this.checkingCurrUser()}
            </ul>
        </div>
    );
  }
}

export default withRouter(NavBar);