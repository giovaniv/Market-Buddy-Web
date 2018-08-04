import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {post} from 'axios';
import {
  Link
} from 'react-router-dom';

class Login extends Component{

  submitHandle(e){
    e.preventDefault();
    var newEmail = e.target[0].value;
    var newPassword = e.target[1].value;

    var loginRequest = {
        email: newEmail,
        password: newPassword
      };

    loginRequest = JSON.stringify(loginRequest);
    // post('/api/login', loginRequest)
    post('http://192.168.88.120:7000/users/login', {user: loginRequest})
    // post('http://192.168.88.124/users/login', {user: loginRequest})
      .then(response => response.data)
      .then(user => {
        if(typeof user === 'string'){
          console.log("The register is not complete", user);
        } else {
          console.log("we are registered");
          localStorage.setItem('user', JSON.stringify(user.user));
          localStorage.setItem('list', JSON.stringify(user.user.lists));
          window.location.href = "/users/"+user.user.id;
        }
      })
      .catch(err => {
        console.log("some messed up during the login post", err);
      });
  }

  render() {
    return (
      <div className="super-blue2">
        <Link to="/main"><h2><i className="material-icons">shopping_cart</i>Market Buddy</h2></Link>
        <form className="vertical-form" onSubmit={this.submitHandle.bind(this)}>
          <h3>Login</h3>
          <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" />
                <label htmlFor="email">Email</label>
              </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        <button className="btn waves-effect " type="submit" name="action">Login
          <i className="material-icons right">send</i>
        </button>
        <div className="row">
          <div className="col s12 space">
            Don't have an account yet?
            <div className="input-field inline">
            <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
