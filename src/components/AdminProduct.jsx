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

class AdminProduct extends Component {
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
              <Link className="waves-effect waves-light btn-small admin-btn" to='/admin_product/new' >Add Product</Link>

              <Table>
                <thead>
                  <tr className="table-head">
                    <th data-field="id">Product</th>
                    <th data-field="brand">Brand</th>
                    <th data-field="price">Price</th>
                    <th data-field="store">Store</th>
                    <th data-field="action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chips</td>
                    <td>Lay's</td>
                    <td className="price">$2.99</td>
                    <td>Save on Foods</td>
                    <td> <a className="waves-effect waves-light btn-small">Edit</a> <a className="waves-effect waves-light btn-small advisor">Delete</a></td>
                  </tr>
                  <tr>
                    <td>Rice Krispies</td>
                    <td>Kellog's</td>
                    <td className="price">$1.99</td>
                    <td>Canadian Superstore</td>
                    <td> <a className="waves-effect waves-light btn-small">Edit</a> <a className="waves-effect waves-light btn-small advisor">Delete</a></td>
                  </tr>
                  <tr>
                    <td>Kit kat</td>
                    <td>Nestle</td>
                    <td className="price">$0.99</td>
                    <td>Wallmart</td>
                    <td> <a className="waves-effect waves-light btn-small">Edit</a> <a className="waves-effect waves-light btn-small advisor">Delete</a></td>
                  </tr>
                  <tr>
                    <td>Pocky</td>
                    <td>Glico</td>
                    <td className="price">$2.44</td>
                    <td>Safeway</td>
                    <td> <a className="waves-effect waves-light btn-small">Edit</a> <a className="waves-effect waves-light btn-small advisor">Delete</a></td>
                </tr>
                <tr>
                  <td>Apple</td>
                  <td>Granny Smith</td>
                  <td className="price">$4.75</td>
                  <td>IGA</td>
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

export default withRouter(AdminProduct);