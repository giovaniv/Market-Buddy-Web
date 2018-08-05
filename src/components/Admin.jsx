import React, {Component} from 'react';
import { withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class Admin extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main>
        {/* <!-- Page Layout here --> */}
          <div className="row">
            <div className="col s12 m4 l3" id="left"> 
              <h5 className="admin">Admin</h5>
              <div className="admin-sidebar">
                <a className="waves-effect waves-light btn-small admin-btn">Products</a>
                <a className="waves-effect waves-light btn-small admin-btn">Stores</a>
                <a className="waves-effect waves-light btn-small admin-btn">Settings</a>
              </div>
            </div>  
            <div className="col s12 m8 l9" id="right"> 
              <h5 className="admin">Dashboard</h5>
              <table>
                <thead>
                  <tr className="table-head">
                    <th>Product</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Store</th>
                    <th>Action</th>
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
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Admin);