import React, {Component} from 'react';
import {post} from 'axios';

class ListItem extends Component {
  render() {
    return(
      <div>
        {this.props.listProduct.map( (item, index) => {
          if(item.quantity > 0){
            return(
              <div className="input-field card div-product-input" key={index}>
                <div className="item-container">
                  <div className="btn-group">
                    <button className="waves-effect waves-light btn-small bl-btn" onClick={() => this.props.minusQuantity(item)}><i className="material-icons small icons-button">remove</i></button>
                    <input type='text' name='quantity' value={item.quantity} readOnly={true} className='quantity' />
                    <button className="waves-effect waves-light btn-small bl-btn" onClick={() => this.props.addQuantity(item)} ><i className="material-icons small icons-button">add</i></button>
                  </div>
                  <p className="s6 item-ls">{item.name} <span className="tooltip">{item.name}</span></p>
                  <button className="waves-effect waves-light btn-small del-btn" onClick={() => this.props.deleteItem(item)}><i className="material-icons small">cancel</i></button>
                </div>
              </div>
            );
          }
        })}
        <button onClick={this.props.submitList} className="waves-effect waves-light btn-small">Save List</button>
      </div>
    );
  }
}

export default ListItem;