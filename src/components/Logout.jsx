import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {post} from 'axios';

class Logout extends Component{
  constructor() {
    super();
  }

  componentWillMount() {
    post("/logout")
    .then(response => response.data)
    .then(user => {
      localStorage.setItem('user_id', null);
      this.props.setCurrUser(null);
      this.props.history.push({
        pathname: '/main'
      })
    });
  }

  render(){
    return (
      <div>
        <p>You are logged out</p>
      </div>
    )
  }
}

export default withRouter(Logout);