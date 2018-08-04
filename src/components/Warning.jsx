import React, {Component} from 'react';

class Warning extends Component{
  constructor() {
    super();
  }

  componentWillMount() {
    if(localStorage.user) {
      window.location.href = "/users/"+ JSON.parse(localStorage.user).id;
    } else {
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