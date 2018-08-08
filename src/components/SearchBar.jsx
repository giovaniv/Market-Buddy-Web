import React, {Component} from 'react';
import {post} from 'axios';
import Modal from 'react-responsive-modal';


class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      searchProduct: [],
      open: false
    };

    this.submitHandle = this.submitHandle.bind(this);
    // this.onOpenModal = this.onOpenModal.bind(this);
    // this.onCloseModal = this.onCloseModal.bind(this);
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
    .then
    (this.refs.textInput.value = '')
    .then(products => {
      if(Array.isArray(products)){
        if(products.length > 10){
          products = products.slice(0, 10);
          console.log(products);
        }
        this.setState( { searchProduct: products } );
      } else {
        this.setState( { searchProduct: "No items found" } );
      }
      this.props.addSearchList(products);
    });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


  render() {
    const { open } = this.state;
    return (
      <div>
        <div className="input-field">
          <form onSubmit={this.submitHandle} className="card div-product-input">
              <input type="search" className="s6" placeholder="Enter a product" ref="textInput" />
              <button onClick={this.onOpenModal} type="submit" className="waves-effect  btn-small search-btn">Search</button>
              <Modal open={open} onClose={this.onCloseModal} center className="list-modal">
                <div>
                  <p>Do you mean?</p>
                  {!Array.isArray(this.state.searchProduct) ? (
                    <p>{JSON.stringify(this.state.searchProduct)}</p>
                    ) : (
                      <ul>
                        {this.state.searchProduct.map( (product, index) => {

                          return (
                            <button onClick={() => this.props.addProduct(product)} className="waves-effect btn-small items-found">
                            <li key={ index }> <p>{product.name}</p>

                                  </li>
                            </button>);
                        })}
                      </ul>
                    )
                  }
                </div>
            </Modal>
          </form>
        </div>
    </div>
    )
  }
}

export default SearchBar;