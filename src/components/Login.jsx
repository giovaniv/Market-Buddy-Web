import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {post} from 'axios';
import {
  Link
} from 'react-router-dom';

import {Button, Icon, Row, Input} from 'react-materialize';

class Login extends Component{

  submitHandle(e){
    e.preventDefault();
    var newEmail = e.target[0].value;
    var newPassword = e.target[1].value;

    var loginRequest = {
      email: newEmail,
      password: newPassword
      };
    // post('/api/login', loginRequest)
    post('http://192.168.88.120:7000/users/login', {user: loginRequest})
    // post('http://192.168.88.124/users/login', {user: loginRequest})
      .then(response => response.data)
      .then(user => {
        if(typeof user === 'string'){
          window.Materialize.toast(`${user}`, 2000, 'fail-alert');
        } else {
          localStorage.setItem('user', JSON.stringify(user.user));
          localStorage.setItem('list', JSON.stringify(user.user.lists));
          localStorage.setItem('success', "Success");
          this.props.history.push({
            pathname: "/users/"+user.user.id,
          });
        }
      })
      .catch(err => {
        window.Materialize.toast(`${err}`, 2000, 'fail-alert');
      });
  }

  render() {
    return (
      <div className="super-blue2">
        <Link to="/main"><h2><Icon >shopping_cart</Icon>Market Buddy</h2></Link>
        <form className="vertical-form" onSubmit={this.submitHandle.bind(this)}>
          <h3>Login</h3>
          <Row>
            <Input id="email" s={12}  type="email" label="Email">
            </Input>
          </Row>
          <Row>
            <Input id="password" s={12}  type="password" label="Password">
            </Input>
          </Row>
          <Button className="waves-effect" type="submit" name="action">Login
            <Icon right>send</Icon>
          </Button>
        <Row>
          <div className="col s12 space">
            Don't have an account yet?
            <div className="input-field inline">
              <Link to="/register">Register</Link>
            </div>
          </div>
        </Row>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
