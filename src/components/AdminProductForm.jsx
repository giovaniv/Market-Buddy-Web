import React, {Component} from 'react';
import { withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import _AdminSideBar from './_AdminSideBar.jsx';
import {post} from 'axios';

class AdminProductForm extends Component {

  productButton(e){
    e.preventDefault();
    var newName = e.target[0].value;
    var newUpc = e.target[1].value;
    var newEan = e.target[2].value;
    var newLogo = e.target[3].value;
    var newBrand = e.target[4].value;

    var productRequest = {
      name: newName,
      store: newUpc,
      price: newEan,
      logo: newLogo,
      brand: newBrand
      };

    productRequest = JSON.stringify(productRequest);
    post('http://192.168.88.120:7000/admin/product', {product: productRequest})
      .then(response => {
          alert("Product Saved");
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
                <h5 className="admin">Add a product</h5>

                <form className="vertical-form" onSubmit={this.productButton.bind(this)} >
                <div className="row">
                  <div className="input-field col s12">
                    <input id="product_name" type="text" className="validate"/>
                    <label htmlFor="product_name">Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="upc" type="text" className="validate"/>
                    <label htmlFor="upc">Upc</label>
                  </div>
                </div>
              <div className="row">
                <div className="input-field col s12">
                <input id="ean" type="text" className="validate"/>
                <label htmlFor="ean">Ean</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="prod_img" type="url" className="validate"/>
                  <label htmlFor="prod_img">Image</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="brand" type="url" className="validate"/>
                  <label htmlFor="brand">Brand</label>
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

export default withRouter(AdminProductForm);