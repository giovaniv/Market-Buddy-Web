import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {post} from 'axios';
import SearchBar from './SearchBar.jsx';
import ListItem from './ListItem.jsx';
import NavBar from './NavBar.jsx';

function searchItem(anArr, target){
  for(var i = 0; i < anArr.length; i++){
    if(anArr[i].name === target){
      return anArr[i];
    }
  }
  return -1;
}

function existInList(anArr, target){
  for(var i = 0; i < anArr.length; i++){
    if(anArr[i].name === target){
      return true;
    }
  }
  return false;
}

class ViewList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchProduct: [],
      listProduct: []
    }

    this.addSearchList = this.addSearchList.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.minusQuantity = this.minusQuantity.bind(this);
    this.submitList = this.submitList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

    // componentWillMount() {
    //     if(!localStorage.user_name){
    //        this.props.history.replace({
    //             pathname: '/login'
    //           })
    //     }
    // }

    addSearchList(products){
      if(Array.isArray(products)){
        this.setState( { searchProduct: products } );
      } else {
        this.setState( { searchProduct: "No items found" } );
      }
    }
    addProduct(product){
      if(!this.state.listProduct.some(item => item.product === product)){
        this.setState({
          listProduct: this.state.listProduct.concat({product: product, quantity: 1})
        });
      }
    }

    addQuantity(product){
      this.setState((oldState) => {
        return {
          ...oldState,
          listProduct: oldState.listProduct.map((item) => {
            if(item.product === product){
              return {...item, quantity: item.quantity + 1}
            }
            return item;
          })
        }
      })
    }
    minusQuantity(product){
      this.setState((oldState) => {
        return {
          ...oldState,
          listProduct: oldState.listProduct.map((item) => {
            if(item.product === product && item.quantity > 0){
              return {...item, quantity: item.quantity - 1}
            }
            return item;
          })
        }
      });

    }
    deleteItem(product){
      this.setState((oldState) => {
        return {
          ...oldState,
          listProduct: oldState.listProduct.map((item) => {
            if(item.product === product){
              return {...item, quantity: 0}
            }
            return item;
          })
        }
      })
    }

    submitList(e){
        e.preventDefault();
        var data = {
            newList: this.state.listProduct
        };

        post('/user_id/list_id', data)
            .then(response => response.data)
            .then(b => console.log(b));
    }

  render() {
    return (
        <div>
         <NavBar />
         <main>
        <div className="row main-div">
        <div className="col s6 m6 l6" id="left">
          <h5 className="list-name">Movie snacks</h5>
          <SearchBar addProduct={this.addProduct} addSearchList={this.addSearchList}/>
          <ListItem listProduct={this.state.listProduct}
            addQuantity={this.addQuantity}
            minusQuantity={this.minusQuantity}
            deleteItem={this.deleteItem}/>
        </div>
          <div className="col s6 m6 l6" id="right">
            <div className="store-list">
              <table>
                <thead className="list-titles">
                  <tr className="table-head list-titles">
                    <th className="admin">Store</th>
                    <th className="admin">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Save on Foods</td>
                    <td>34.22</td>
                  </tr>
                  <tr>
                    <td>Canadian Superstore</td>
                    <td>30.89</td>
                  </tr>
                  <tr>
                    <td>Safeway</td>
                    <td>35.87</td>
                  </tr>
                  <tr>
                    <td>Wallmart</td>
                    <td>32.96</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <h5 className="admin">Movie snacks</h5>

        </div>

      </main>
        <footer className="page-footer">
          <h5 className="icon-footer"><i className="material-icons">shopping_cart</i>Market Buddy</h5>
          <p className="footer-copy">© 2018 Market Buddy</p>
        </footer>
    </div>
    );
  }
}
export default withRouter(ViewList);