import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {
  Link
} from 'react-router-dom';
import {Tab, Tabs} from 'react-materialize';
import {get} from 'axios';

class Stores extends Component{

  constructor() {
    super();

    this.state = {
      prices: []
    };
  }

  componentWillMount(){
    get("http://192.168.88.120:7000/prices")
    .then(response => response.data)
    .then(prices => {
      this.setState( { prices: prices} );
    });
  }

  render() {
    var constructingList = []

    // const products = [...this.props.products] || [];

    constructingList = this.props.stores.map( (store) => {
      return {store, product: {}};
    });

    for(var i = 0; i < constructingList.length; i++){
      for(var j = 0; j < this.props.products.length; j++){
        constructingList[i].product = Object.assign({}, this.props.products[j]);
      }
    }

    for(var i = 0; i < this.state.prices.length; i++){
      for(var j = 0; j < constructingList.length; j++){
        if(this.state.prices[i].store_id === constructingList[j].store.id && this.state.prices[i].product_id === constructingList[j].product.id){
          constructingList[j].price = this.state.prices[i].price * constructingList[j].product.quantity;
        }
      }
    }

    console.log(constructingList);

      // store.products.map(product => {
      //   this.state.prices.map( price => {
      //     if(price.product_id === product.id && price.store_id === store.id) {
      //       newProduct["price"] = price.price * product.quantity;
      //     }

      //   });
      // });
    // console.log(constructingList);

    return (
      <Tabs className='tab-demo z-depth-1'>
      {
        constructingList.map( store => {
          return (
            <Tab title={store.store.name}>
              <div className="prod-list">
                <p>{store.product.name}</p>
                <div className="c-list">
                  <i className="material-icons">attach_money</i>
                  <p>{store.price}</p>
                </div>
              </div>
            </Tab>
          );
      })
    }
      </Tabs>
    )
  }
}

export default Stores;

