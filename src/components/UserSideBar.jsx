import React, {Component} from 'react';

class UserSideBar extends Component{
  render(){

    return (
      <div className="col s12 m4 l3" id="left">
        <img src="http://placekitten.com/g/100/100" alt="Placeholder" className="circle responsive-img" />
        <p id="username">{localStorage.user_name}</p>
        <a className="waves-effect waves-light btn-small">Edit Profile</a>
      </div>

    );

  }
}

export default UserSideBar