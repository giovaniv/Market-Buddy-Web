import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {post} from 'axios';

class ViewList extends Component{ 
    constructor(props) {
        super(props); 
        this.state = {
          product: 'nothing'
        }
      }

    submitHandle(e){
        e.preventDefault();
        var newProduct = e.target[0].value;

        var data = {
            item: newProduct,
          };

        // console.log(newProduct);
    
        post('/search', data)
          .then(response => {
              this.setState({ product: response.data })
            }
          );
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
            <p>{this.state.product}</p>
        </div>
        </div>
    );
}
}
export default withRouter(ViewList);