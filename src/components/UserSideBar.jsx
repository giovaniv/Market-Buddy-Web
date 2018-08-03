import React, {Component} from 'react';

class UserSideBar extends Component{
  render(){
    const currUser = JSON.parse(localStorage.user);
    return (
      <div className="col s12 m4 l3" id="left">
        <img src={currUser.avatar} alt="Placeholder" className="circle responsive-img" />
        <p id="username">{currUser.name}</p>
        <p>{currUser.points}</p>
        <a className="waves-effect waves-light btn-small">Edit Profile</a>
      </div>

    );

  }
}

export default UserSideBar