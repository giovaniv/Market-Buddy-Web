import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {get, post} from 'axios';
import {Link} from 'react-router-dom';
import {Button, Icon, Row, Input} from 'react-materialize';

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
          localStorage.setItem('list', JSON.stringify([]));
          this.props.history.push({
            pathname: `/user/${user.id.id}`
          })
        }
      });
  }

  render() {
    return (
      <div className="super-blue">
      <Link to="/main"><h2><Icon >shopping_cart</Icon>Market Buddy</h2></Link>
      <form className="vertical-form" onSubmit={this.submitHandle.bind(this)}>
        <h3>Register</h3>
        <Row>
          <Input id="name" s={12}  type="text" label="Name">
          </Input>
        </Row>
        <Row>
          <Input id="email" s={12}  type="email" label="Email">
          </Input>
        </Row>
        <Row>
          <Input id="password" s={12}  type="password" label="Password">
          </Input>
        </Row>
        <Row> 
          <Input id="confirm_password" s={12}  type="password" label="Confirm Password">
          </Input>
        </Row>
        <Button waves="waves-effect" type="submit" name="action">Register
         <Icon right>send</Icon>
        </Button>
        <Row>
          <div className="col s12 space">
            Already have an account?
            <div className="input-field inline">
            <Link to="/login">Login</Link>
            </div>
          </div>
        </Row>
      </form>
    </div>
    );
  }
}
export default withRouter(Register);




