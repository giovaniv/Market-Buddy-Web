import React, {Component} from 'react';
import {post} from 'axios';

class ListItem extends Component {

  render() {
    return(
      <div className="listContent">
        <h1>Your list</h1>
        <ul>
            {this.props.listProduct.map( (product, index) => {
                if(product.quantity > 0){
                    return (<li key={ index }>
                                <span className="prodName">{product.name}</span>
                                <button onClick={this.props.addQuantity}> Add </button>
                                <span className="prodQuan">{product.quantity}</span>
                                <button onClick={this.props.minusQuantity}> Minus </button>
                                <button onClick={this.props.deleteItem}> Delete </button>
                            </li>);
                }
            })}
        </ul>

        <button onClick={this.submitList}>Create List</button>
      </div>
    );
  }

}

export default ListItem;