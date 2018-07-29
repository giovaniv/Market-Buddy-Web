import React, {Component} from 'react';
import { withRouter } from 'react-router'

class Register extends Component{
  submitHandle(e){
    e.preventDefault();
    this.props.history.push('/');
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