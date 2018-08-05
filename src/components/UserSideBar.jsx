import React, {Component} from 'react';
import Modal from 'react-responsive-modal';


class UserSideBar extends Component{

  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  updateProfile = (e) => {
    var newName = e.target[0].value;
    var newAvatar = e.target[1].value;
    console.log(newName, newAvatar);
    var newProfile = JSON.parse(localStorage.getItem('user'));
    newProfile.name = newName;
    newProfile.avatar = newAvatar;
    localStorage.setItem('user', JSON.stringify(newProfile));
  };

  render(){
    const { open } = this.state;
    const currUser = JSON.parse(localStorage.user);
    return (
      <div className="col s12 m4 l3" id="left">
        <img src={currUser.avatar} alt="Placeholder" className="circle responsive-img" />
        <p id="username">{currUser.name}</p>
        <p>{currUser.points}</p>
        <a className="waves-effect waves-light btn-small" onClick={this.onOpenModal}>Edit Profile</a>
          <Modal open={open} onClose={this.onCloseModal} center>
            <form onSubmit={this.updateProfile.bind(this)}>
              <label htmlFor="name">New name:</label>
              <input id="name" type="text" />
              <label htmlFor="avatar">New avatar url:</label>
              <input id="avatar" type="text" />
              <button type="submit" className="waves-effect btn-small search-btn">Save</button>
            </form>
          </Modal>
      </div>

    );

  }
}

export default UserSideBar;