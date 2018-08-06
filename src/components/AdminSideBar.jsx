import React, {Component} from 'react';

class AdminSideBar extends Component{

  render() {

    return (

      <div className="col s12 m4 l3" id="left">
        <h5 className="admin">Admin</h5>
        <div className="admin-sidebar">
          <a className="waves-effect waves-light btn-small admin-btn">Products</a>
          <a className="waves-effect waves-light btn-small admin-btn">Stores</a>
          <a className="waves-effect waves-light btn-small admin-btn">Settings</a>
        </div>
      </div>
    );
  }
}

export default AdminSideBar;