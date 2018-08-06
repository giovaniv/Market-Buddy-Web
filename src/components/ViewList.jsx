import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {post} from 'axios';
import SearchBar from './SearchBar.jsx';
import ListItem from './ListItem.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import {
  Link
} from 'react-router-dom';

import {Tab, Tabs} from 'react-materialize';

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
      const listItem = searchItemId(JSON.parse(localStorage.list), listId); 
    }
    return (
      <div>
        <NavBar />
        <main>
          <div className="row main-div">
            <div className="col s6 m6 l6" id="left">
            <Link className="btn-floating btn-large waves-effect back-btn" to="/users/:id"><i className="material-icons">arrow_back</i></Link>
            {/* <h5 className="list-name">{listItem.name}</h5> */}
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
             
          </div>
        </div>
        <div className="col s6 m6 l6">
          <h3>Stores</h3>
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Save On Foods">
            <div className="prod-list">
              <p>Liquid honey</p>
              <div className="c-list">
                <i className="material-icons">attach_money</i>
                <p>4.99</p>
              </div>
            </div>
            </Tab>
            <Tab title="Safeway">
              <div className="prod-list">
                <p>Liquid honey</p>
                <div className="c-list">
                  <i className="material-icons">attach_money</i>
                  <p>3.89</p>
                </div>
              </div>
            </Tab>
            <Tab title="Whole Foods">
              <div className="prod-list">
                <p>Liquid honey</p>
                <div className="c-list">
                  <i className="material-icons">attach_money</i>
                  <p>5.45</p>
                </div>
              </div>
            </Tab>
            <Tab title="IGA">
              <div className="prod-list">
                <p>Liquid honey</p>
                <div className="c-list">
                  <i className="material-icons">attach_money</i>
                  <p>4.40</p>
                </div>
              </div>
            </Tab>
            <Tab title="T & T">
              <div className="prod-list">
                <p>Liquid honey</p>
                <div className="c-list">
                  <i className="material-icons">attach_money</i>
                  <p>4.19</p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </main>
      <Footer/>
    </div>
    );
  }
}
export default withRouter(ViewList);