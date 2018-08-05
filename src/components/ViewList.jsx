import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {post} from 'axios';
import SearchBar from './SearchBar.jsx';
import ListItem from './ListItem.jsx';
import NavBar from './NavBar.jsx';
import {
  Link
} from 'react-router-dom';

function searchItem(anArr, target){
  for(var i = 0; i < anArr.length; i++){
    if(anArr[i].name === target){
      return anArr[i];
    }
  }
  return -1;
}

function searchItemId(anArr, target){
  for(var i = 0; i < anArr.length; i++){
    if(String(anArr[i].id) === target){
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
          list: this.state.listProduct,
          name: "Placeholder",
          user: JSON.parse(localStorage.user).id
        }

        post('http://192.168.88.120:7000/lists/new', data)
            .then(response => response.data)
            .then(b => {
              var newList = this.state.listProduct;

              var updatedLists = {
                id: 10,
                name: data.list_name,
                user_id: data.user
              }
              console.log(updatedLists);
              // var updatedList = JSON.parse(localStorage.list).concat(this.state.listProduct);
              // console.log(updatedList);
              // localStorage.setItem('list', JSON.stringify(user.id));
            });
    }

  render() {
    const listId = this.props.location.pathname.slice(15);
    var listItem = "Placeholder";
    if(Number(listId) !== NaN){
      console.log("here yo", listItem)
      const listItem = searchItemId(JSON.parse(localStorage.list), listId);
     
    }
    return (
        <div>
         <NavBar />
         <main>
        <div className="row main-div">
        <div className="col s6 m6 l6" id="left">
          {/* <h5 className="list-name">{listItem.name}</h5> */}
        <Link className="btn-floating btn-large waves-effect back-btn" to="/users/:id"><i className="material-icons">arrow_back</i></Link>

          {/* <Link ><i className="material-icons">arrow_back</i></Link> */}
          <h5 className="list-name">{JSON.parse(localStorage.listObj).title }</h5>
          <SearchBar addProduct={this.addProduct} addSearchList={this.addSearchList}/>
          <ListItem listProduct={this.state.listProduct}
            addQuantity={this.addQuantity}
            minusQuantity={this.minusQuantity}
            deleteItem={this.deleteItem}
            submitList={this.submitList}
            />
        </div>
          <div className="col s6 m6 l6" id="right-blue">
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