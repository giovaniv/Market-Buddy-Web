import React, {Component} from 'react';
import { withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import _AdminSideBar from './_AdminSideBar.jsx';
import {post} from 'axios';
import {Icon, Row, Input, Button} from 'react-materialize';

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
    post('http://localhost:7000/admin/product', {product: productRequest})
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
          <Row>
            <_AdminSideBar />
            <div className="col s12 m8 l9" id="right"> 
              <h5 className="admin">Dashboard</h5>
              {/* <a classNameName="waves-effect waves-light btn-small admin-btn">Add Product</a> */}
                <h5 className="admin">Add a product</h5>
                <form className="vertical-form" onSubmit={this.productButton.bind(this)} >
                  <Row>
                    <Input id="name" s={12}  type="text" label="Name" className="validate">
                    </Input>
                  </Row>
                  <Row>
                    <Input id="upc" s={12}  type="text" label="Upc Code" className="validate">
                    </Input>
                  </Row>
                  <Row>
                  <Input id="ean" s={12}  type="text" label="Ean" className="validate">
                    </Input>
                  </Row>
                  <Row>
                    <Input id="img" s={12}  type="url" label="Image" className="validate">
                    </Input>
                  </Row>
                  <Row>
                    <Input id="brand" s={12}  type="text" label="Brand" className="validate">
                    </Input>
                  </Row>
                  <Button waves="waves-effect" type="submit" name="action">Login
                    <Icon right>send</Icon>
                  </Button>
              </form>
            </div>
          </Row>
        </main>
        <Footer />
      </div>
    )
  }
}

export default withRouter(AdminProductForm);