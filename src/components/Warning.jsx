import React, {Component} from 'react';

class Warning extends Component{
  constructor() {
    super();
  }

  componentWillMount() {
    if(localStorage.user) {
      console.log('user logged in');
      window.location.href = "/users/"+ JSON.parse(localStorage.user).id;
    } else {
      console.log('register');
      window.location.href = "/login";
    }
  }

  render(){
    return (
      <div>
      </div>
    )
  }
}

export default Warning;