import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {get, post} from 'axios';
import {Link} from 'react-router-dom';

class Register extends Component{

  submitHandle(e){
    e.preventDefault();
    var newName = e.target[0].value;
    var newEmail = e.target[1].value;
    var newPassword = e.target[2].value;
    var newPasswordConfirm = e.target[3].value;

    var data = {
        name: newName,
        email: newEmail,
        password: newPassword,
        confirmPassword: newPasswordConfirm
      };

    // post('/api/register', data)
    post('http://192.168.88.120:7000/users/register', {user:data})

      .then(response => response.data)
      .then(user => {

        if(typeof user === 'string'){
          console.log("The register is not complete", user);
        } else {
          localStorage.setItem('user', JSON.stringify(user.id));
          this.props.history.push({
            pathname: `/user/${user.id.id}`
          })
        }
      });
  }

  render() {
    return (
      <div className="super-blue">
      <Link to="/main"><h2><i className="material-icons">shopping_cart</i>Market Buddy</h2></Link>
      <form className="vertical-form" onSubmit={this.submitHandle.bind(this)}>
        <h3>Register</h3>
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="confirm_password" type="password" className="validate" />
              <label htmlFor="confirm_password">Confirm Password</label>
            </div>
          </div>
        <button className="btn waves-effect " type="submit" name="action">Register
          <i className="material-icons right">send</i>
        </button>
        <div className="row">
            <div className="col s12 space">
              Already have an account?
              <div className="input-field inline">
              <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </form>
    </div>
    );
  }
}
export default withRouter(Register);




