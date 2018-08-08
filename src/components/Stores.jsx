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
    const storeItems = (
      // <Tabs className='tab-demo z-depth-1'>

      this.state.stores.map( store => {
        return (
          <Tab title={<div style={{ color: store.color }}>{store.name}</div>} >
              <StoreColumn product={this.props.products} price={this.state.prices} currStore={store}/>
          </Tab>
        );
      })
      // </Tabs>
    );
    return (
      <Tabs className='tab-demo z-depth-1'>
      {
        storeItems
      }
      </Tabs>

    )
  }
}

export default Stores;


