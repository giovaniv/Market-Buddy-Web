import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {post} from 'axios';
import {
  Link
} from 'react-router-dom';
import Footer from './Footer.jsx'


class Main extends Component{
  render() {
    return (
      <div>
          <header className="main-header">
            <div className="landing-nav">
              <a href="#!" className="main-logo"><i className="material-icons">shopping_cart</i>Market Buddy</a>
              <div className="main-menu">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              </div>
            </div>
            <div className="header-layout">
              <div className="left-header">
                <h1>Market Buddy</h1>
                <h3>Your smart grocery shopping list</h3>
                <p>Create shopping lists and search nearby stores to see the total price of your list. Use our mobile app to view your lists and scan item barcodes to update an item price.</p>
                <Link to="/register" className="waves-effect waves-light btn-medium">Create Account</Link>
                <Link to="/login" className="waves-effect waves-light btn-medium">Login</Link>
              </div>
            <img src="build/phone.png" alt="Market Buddy App" className="main-phone" />
          
          </div>     
      </header>
      <main className="container">
        <h2>How it works</h2>
        <div className="div-wrapper">
          <div className="ind-list">
            <i className="medium material-icons">format_list_numbered</i>
            <p>Create as many lists as you want</p>
          </div>
          <div className="ind-list">
            <i className="medium material-icons">shopping_cart</i>
            <p>Get the total from different grocery stores</p>
          </div>
          <div className="ind-list">
            <i className="medium material-icons">attach_money</i>
            <p>Go shopping and save money!</p>
          </div>
        </div>
      </main>
      <Footer />
      {/* <--JavaScript at end of body for optimized loading--> */}
      <script type="text/javascript" src="js/materialize.min.js"></script>
    </div>

    )
  }
}

export default withRouter(Main);
