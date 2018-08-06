import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {
  Link
} from 'react-router-dom';
import {Tab, Tabs} from 'react-materialize';

class Stores extends Component{

  componentDidMount() {
    console.log("I am rendered");
  }

  render() {
    return (
      <Tab title={this.props.storeName}>
        <div className="prod-list">
          <p>Liquid honey</p>
          <div className="c-list">
            <i className="material-icons">attach_money</i>
            <p>4.99</p>
          </div>
        </div>
      </Tab>
    )
  }
}

export default Stores;
