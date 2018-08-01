import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {post} from 'axios';

class ViewList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          product: []
        }

        this.submitHandle = this.submitHandle.bind(this);
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
            console.log(products);
            if(Array.isArray(products)){
                console.log("I am an array");
                this.setState( { product: products } );
            } else {
                this.setState( { product: "No items found" } );
            }
          });
      }

    render() {
    return (
        <div>
        <div>
            <h1 >I Will show a single list with options to add products/delete/edit etc.. </h1>
        </div>

        <div>
        <form onSubmit={this.submitHandle.bind(this)}>
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
            {!Array.isArray(this.state.product) ? (
                <p>{JSON.stringify(this.state.product)}</p>
               ) : (
                <ul>
                    {this.state.product.map(function(product, index){
                        return <li key={ index }>{product.name}</li>;
                      })}
                </ul>
               )
            }
        </div>
        </div>
    );
}
}
export default withRouter(ViewList);