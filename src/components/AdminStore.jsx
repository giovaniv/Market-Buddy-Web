import React, {Component} from 'react';
import { withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import {Table} from 'react-materialize';
import _AdminSideBar from './_AdminSideBar.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class AdminStore extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main>
        {/* <!-- Page Layout here --> */}
          <div className="row">
            <_AdminSideBar />
            <div className="col s12 m8 l9" id="right"> 
              <h5 className="admin">Dashboard</h5>
              <Link className="waves-effect waves-light btn-small admin-btn" to='/admin_store/new' >Add Store</Link>

              <Table>
                <thead>
                  <tr className="table-head">
                    <th data-field="id">Name</th>
                    <th data-field="brand">Website</th>
                    <th data-field="price">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Save On Foods</td>
                    <td>www.saveonfoods.com</td>
                    <td> <a className="waves-effect waves-light btn-small">Edit</a> <a className="waves-effect waves-light btn-small advisor">Delete</a></td>
                  </tr>
                  <tr>
                    <td>Safeway</td>
                    <td>www.safeway.ca</td>
                    <td> <a className="waves-effect waves-light btn-small">Edit</a> <a className="waves-effect waves-light btn-small advisor">Delete</a></td>
                  </tr>
                  <tr>
                    <td>WholeFoods</td>
                    <td>www.wholefoodsmarket.com</td>
                    <td> <a className="waves-effect waves-light btn-small">Edit</a> <a className="waves-effect waves-light btn-small advisor">Delete</a></td>
                  </tr>
                  <tr>
                    <td>IGA</td>
                    <td>www.iga.com</td>
                    <td> <a className="waves-effect waves-light btn-small">Edit</a> <a className="waves-effect waves-light btn-small advisor">Delete</a></td>
                </tr>
                <tr>
                  <td>T and T</td>
                  <td>tnt-supermarket/com</td>
                  <td> <a className="waves-effect waves-light btn-small">Edit</a> <a className="waves-effect waves-light btn-small advisor">Delete</a></td>
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default withRouter(AdminStore);