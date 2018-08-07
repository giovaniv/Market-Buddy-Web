import React, {Component} from 'react';
import { withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import _AdminSideBar from './_AdminSideBar.jsx';
import {post} from 'axios';

class AdminStoreForm extends Component {

  storeButton(e){
    e.preventDefault();
    var newName = e.target[0].value;
    var newLogo = e.target[1].value;
    var newWebsite = e.target[2].value;

    var storeRequest = {
      name: newName,
      store: newLogo,
      price: newWebsite
      };

    storeRequest = JSON.stringify(Request);
    post('http://192.168.88.120:7000/admin/product', {product: storeRequest})
      .then(response => {
          alert("Store Saved");
      })
      .catch(err => {
        console.log("some messed up during the product post", err);
      });
  }

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
              {/* <a classNameName="waves-effect waves-light btn-small admin-btn">Add Product</a> */}

                <h5 className="admin">Add a Store</h5>
                <form className="vertical-form" onSubmit={this.storeButton.bind(this)}>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="store_name" type="text" className="validate"/>
                    <label htmlFor="store_name">Store Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="logo_url" type="url" className="validate"/>
                    <label htmlFor="logo_url">store logo url</label>
                  </div>
                </div>
              <div className="row">
                <div className="input-field col s12">
                <input id="website" type="url" className="validate"/>
                <label htmlFor="website">website</label>
                </div>
              </div>
              <button className="btn waves-effect " type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
              </form>

            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default withRouter(AdminStoreForm);