import React from 'react';
import {
  Link
} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <h1 >I AM THE NAVBAR!</h1>
            <ul>
              <li><Link to="/user_id">Profile Page</Link></li>
              <li><Link to="/user_id/lists">Show Lists</Link></li>
              <li><Link to="/user_id/list_id">A list</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Log In</Link></li>
            </ul>
        </div>
    );
}
export default NavBar;