import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {post} from 'axios';

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

        this.submitHandle = this.submitHandle.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.minusQuantity = this.minusQuantity.bind(this);
        this.submitList = this.submitList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }

    submitHandle(e){
        e.preventDefault();
        var newProduct = e.target[0].value;

        var data = {
            item: newProduct,
        };

        post('/search', data)
          .then(response => {
                return response.data
            }
          )
          .then(products => {
            if(Array.isArray(products)){
                this.setState( { searchProduct: products } );
            } else {
                this.setState( { searchProduct: "No items found" } );
            }
        });
    }

    // Refactoring stretch into different components
    addProduct(e){
        e.preventDefault();
        var oldList = this.state.listProduct;
        var newItem = searchItem(this.state.searchProduct, e.target.innerHTML);
        if(existInList(this.state.listProduct, newItem.name)){
            console.log("exists");
            var existingItem = searchItem(this.state.listProduct, newItem.name);
            existingItem.quantity += 1;
            var newList = this.state.listProduct;
            this.setState( { listProduct: newList} );
        } else {
            console.log("not");
            newItem["quantity"] = 1;
            oldList.push(searchItem(this.state.searchProduct, e.target.innerHTML));
            this.setState( {listProduct: oldList} );
        }
        console.log(this.state.listProduct);
    }

    addQuantity(e){
        e.preventDefault();
        var addQuantityProduct = searchItem(this.state.listProduct, e.target.parentNode.children[0].innerHTML);
        addQuantityProduct.quantity += 1;
        var newList = this.state.listProduct;
        this.setState( { listProduct: newList} );
    }

    minusQuantity(e){
        e.preventDefault();
        var minusQuantityProduct = searchItem(this.state.listProduct, e.target.parentNode.children[0].innerHTML);
        if(minusQuantityProduct.quantity > 0){
            minusQuantityProduct.quantity -= 1;
        }
        var newList = this.state.listProduct;
        this.setState( { listProduct: newList} );
    }

    deleteItem(e){
        e.preventDefault();
        var deleteProduct = searchItem(this.state.listProduct, e.target.parentNode.children[0].innerHTML);
        deleteProduct.quantity = 0;
        this.setState( { listProduct: this.state.listProduct } );
    }

    submitList(e){
        e.preventDefault();

        console.log(this.state.listProduct);

        var data = {
            newList: this.state.listProduct
        };

        post('/user_id/list_id', data)
            .then(response => response.data)
            .then(b => console.log(b));
    }

    render() {
        // const addProduct = this.addProduct;
    return (
        <div>
            <div>
                <h1 >I Will show a single list with options to add products/delete/edit etc.. </h1>
            </div>

            <div>
            <form onSubmit={this.submitHandle}>
            <p>Search Bar</p>

            <label><b>Hit Enter</b></label>
            <input type="text" placeholder="Hit submit to search" name="product" />

            <div>
                <button type="submit">Submit</button>
            </div>

            </form>
            </div>

            <div>
                <p>result</p>
                {!Array.isArray(this.state.searchProduct) ? (
                    <p>{JSON.stringify(this.state.searchProduct)}</p>
                   ) : (
                    <ul>
                        {this.state.searchProduct.map( (product, index) => {
                            return (<li key={ index }><button onClick={this.addProduct}>{product.name}</button></li>);
                          })}
                    </ul>
                   )
                }
            </div>

            <div className="listContent">
                <h1>Your list</h1>
                <ul>
                    {this.state.listProduct.map( (product, index) => {
                        if(product.quantity > 0){
                            return (<li key={ index }>
                                        <span className="prodName">{product.name}</span>
                                        <button onClick={this.addQuantity}> Add </button>
                                        <span className="prodQuan">{product.quantity}</span>
                                        <button onClick={this.minusQuantity}> Minus </button>
                                        <button onClick={this.deleteItem}> Delete </button>
                                    </li>);
                        }
                    })}
                </ul>
            </div>

            <button onClick={this.submitList}>Create List</button>
        </div>
    );
}
}
export default withRouter(ViewList);