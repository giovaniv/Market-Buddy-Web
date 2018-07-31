import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {post} from 'axios';

class Register extends Component{

  submitHandle(e){
    e.preventDefault();
    var newEmail = e.target[0].value;
    var newPassword = e.target[1].value;
    var newPasswordConfirm = e.target[2].value;

    var data = {
        email: newEmail,
        password: newPassword,
        confirmPassword: newPasswordConfirm
      };

    //redirect if its a cookie
    post('/register', data)
      .then(response => response.data)
      .then(user => {
        localStorage.setItem('user_id', user);
        if(user.message){
          console.log(user.message);
        } else {
          this.props.setCurrUser(data.email);
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
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" />

            <label><b>Password</b></label>
            <input placeholder="Enter Password" name="psw" />

            <label><b>Repeat Password</b></label>
            <input placeholder="Repeat Password" name="psw-repeat" />

            <div>
              <button type="button">Cancel</button>
              <button type="submit">Sign Up</button>
            </div>

          </div>
        </form>
    );
  }
}
export default withRouter(Register);




