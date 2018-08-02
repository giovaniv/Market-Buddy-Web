import React, {Component} from 'react';
import {post} from 'axios';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      searchProduct: []
    };

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
            if(Array.isArray(products)){
              this.setState( { searchProduct: products } );
            } else {
              this.setState( { searchProduct: "No items found" } );
            }
            this.props.addSearchList(products);
        });
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandle}>
          <p>Search Bar</p>

          <label><b>Hit Enter</b></label>
          <input type="text" placeholder="Hit submit to search" name="product" />

          <div>
              <button type="submit">Submit</button>
          </div>

        </form>


      <div>
          <p>result</p>
          {!Array.isArray(this.state.searchProduct) ? (
              <p>{JSON.stringify(this.state.searchProduct)}</p>
             ) : (
              <ul>
                  {this.state.searchProduct.map( (product, index) => {
                      return (<li key={ index }><button onClick={this.props.addProduct}>{product.name}</button></li>);
                    })}
              </ul>
             )
          }
      </div>
    </div>
    )
  }
}

export default SearchBar;