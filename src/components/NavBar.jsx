import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {
  Link
} from 'react-router-dom';

class NavBar extends Component{

  render() {
    return (
        <div>
            <div className="navbar-fixed">
              <nav>
                <div className="nav-wrapper">
                  <Link to="/user_id" className="center brand-logo"><i className="material-icons">shopping_cart</i>Market Buddy</Link>
                  <Link to="/logout" data-target="mobile-demo" className="right sidenav-trigger"><i className="material-icons">more_vert</i></Link>
                  <ul className="right hide-on-med-and-down">
                    <li><Link to="/logout">Logout</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
              <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
  }
}

export default withRouter(NavBar);