import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {
  Link
} from 'react-router-dom';
import {Tab, Tabs} from 'react-materialize';
import {get} from 'axios';
import StoreColumn from './StoreColumn.jsx'

function searchItemId(anArr, target){
  for(var i = 0; i < anArr.length; i++){
    if(anArr[i].id == target){
      return anArr[i];
    }
  }
  return -1;
}

class Stores extends Component{

  constructor() {
    super();

    this.state = {
      prices: [],
      stores: [],
      products: []
    };
  }

  componentWillMount(){
    get("http://192.168.88.120:7000/lists/" + this.props.listId + "/totals")
    .then(response => response.data)
    .then(prices => {
      this.setState( { prices: prices} );
    });

    get("http://192.168.88.120:7000/stores")
    .then(response => response.data)
    .then(stores => {
      this.setState( { stores: stores} );
    });

    get("http://192.168.88.120:7000/products")
    .then(response => response.data)
    .then(products => {
      this.setState( { products: products} );
    });
  }

  render() {
    // var constructingList = []

    // // const products = [...this.props.products] || [];

    // constructingList = this.props.stores.map( (store) => {
    //   return {store, product: {}};
    // });

    // for(var i = 0; i < constructingList.length; i++){
    //   for(var j = 0; j < this.props.products.length; j++){
    //     constructingList[i].product = Object.assign({}, this.props.products[j]);
    //   }
    // }

    // for(var i = 0; i < this.state.prices.length; i++){
    //   for(var j = 0; j < constructingList.length; j++){
    //     if(this.state.prices[i].store_id === constructingList[j].store.id && this.state.prices[i].product_id === constructingList[j].product.id){
    //       constructingList[j].product.price = this.state.prices[i].price * constructingList[j].product.quantity;
    //     }
    //   }
    // }

    // console.log("List is: ", constructingList);
    return (
      <Tabs className='tab-demo z-depth-1'>
      {
        this.state.stores.map( store => {
          return (
            <Tab title={store.name}>
                <StoreColumn product={this.props.products} price={this.state.prices} currStore={store}/>
            </Tab>
          );
      })
    }
      </Tabs>
    )
  }
}

export default Stores;


