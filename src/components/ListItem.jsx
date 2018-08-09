import React, {Component} from 'react';
import {post} from 'axios';
import Modal from 'react-responsive-modal';

class ListItem extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return(
      <div>
        {this.props.listProduct.map( (item, index) => {
          if(item.quantity > 0){
            return(
              <div className="input-field card" key={index}>
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
        <div className="div-btns">
          <button onClick={this.props.submitList} className="waves-effect waves-light btn-small">Save List</button>
          <button className="waves-effect waves-light btn-small btn-space" onClick={this.onOpenModal}>Open Map</button>
          <Modal open={this.state.open} onClose={this.onCloseModal} center className="map-modal">
          <iframe src='http://192.168.88.120:7000/maps?at=49.28,-123.11'  allow='geolocation' width='100%' height='100%' frameBorder='0'/>
          </Modal>
      
        </div>
      </div>
    );
  }
}

export default ListItem;