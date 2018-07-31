import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {post} from 'axios';

class Login extends Component{

  submitHandle(e){
    e.preventDefault();
    var newEmail = e.target[0].value;
    var newPassword = e.target[1].value;

    var loginRequest = {
        email: newEmail,
        password: newPassword
      };

    //redirect if its a cookie
    post('/login', loginRequest)
      .then(response => response.data)
      .then(user => {
        localStorage.setItem('user_id', user);
        if(user.message){
          console.log(user.message);
        } else {
          this.props.setCurrUser(loginRequest.email);
          this.props.history.push({
            pathname: '/user_id'
          })
        }
      });

  }

  render() {
    return (
        <form onSubmit={this.submitHandle.bind(this)}>
          <div>
            <h1>Sign In</h1>
            <p>Please fill in this form to sign into your account.</p>

            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" />

            <label><b>Password</b></label>
            <input placeholder="Enter Password" name="psw" />

            <div>
              <button type="button">Cancel</button>
              <button type="submit">Sign Up</button>
            </div>

          </div>
        </form>
    );
  }
}
export default withRouter(Login);
