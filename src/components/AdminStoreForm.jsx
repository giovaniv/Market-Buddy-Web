import React, {Component} from 'react';
import { withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import _AdminSideBar from './_AdminSideBar.jsx';
import {post} from 'axios';
import {Icon, Row, Input, Button} from 'react-materialize';

class AdminStoreForm extends Component {


  storeButton(e){
    e.preventDefault();
    var newName = e.target[0].value;
    var newLogo = e.target[1].value;
    var newWebsite = e.target[2].value;

    var storeRequest = {
      name: newName,
      logo: newLogo,
      website: newWebsite
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
          <Row>
            <_AdminSideBar />
            <div className="col s12 m8 l9" id="right"> 
              <h5 className="admin">Dashboard</h5>
                <h5 className="admin">Add a Store</h5>
                <form className="vertical-form" onSubmit={this.storeButton.bind(this)}>
                <Row>
                  <Input id="name" s={12}  type="text" label="Store Name" className="validate">
                  </Input>
                </Row>
                <Row>
                  <Input id="logo" s={12}  type="url" label="Store logo url" className="validate">
                  </Input>
                </Row>
                <Row>
                  <Input id="website" s={12}  type="url" label="Website" className="validate">
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

export default withRouter(AdminStoreForm);