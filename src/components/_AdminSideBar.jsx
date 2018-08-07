import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class _AdminSideBar extends Component{
  render(){

    return (
      <div className="col s12 m4 l3" id="left"> 
        <h5 className="admin">Admin</h5>
        <div className="admin-sidebar">
          <Link className="waves-effect waves-light btn-small admin-btn" to='/admin_product'>Products</Link>
          <Link className="waves-effect waves-light btn-small admin-btn" to='/admin_store'>Stores</Link>
        </div>
      </div>  

    );

  }
}

export default _AdminSideBar