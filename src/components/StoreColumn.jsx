import React, {Component} from 'react';

class StoreColumn extends Component{

  render() {
    var total = 0 ;
<<<<<<< HEAD
    const list = this.props.product.map( product => {
      // console.log("here", product.prices, product.quantity, product);
      if(product.prices){
        console.log("I have a price", product);
        return product.prices.map( price => {
          if(price.store_id === this.props.currStore.id && product.quantity > 0){
            total += price.price * product.quantity;
            return (
              <div className="prod-list">
                <p>{product.name}</p>
                <div className="c-list">
                  <div className="c-list">
                    <p>Quantity: {product.quantity}</p>
                  </div>
                  <div className="c-list">
                    <i className="material-icons">attach_money</i>
                    <p>Price: {price.price}</p>
                  </div>
                </div>
=======

    const list = this.props.price.map( price => {
      return this.props.product.map( product => {
        if(price.product_id === product.id && price.store_id === this.props.currStore.id && product.quantity > 0){
          total += price.price * product.quantity;
          return (
            <div className="prod-list">
              <p>{product.name}</p>
              <div className="c-list">
                {/* <div className="c-list">
                <p>Quantity: {product.quantity}</p>

                </div> */}
                <div className="c-list">
                  <i className="material-icons">attach_money</i>
                  <p>Price: {price.price}</p>
>>>>>>> 236d79a605f91060ce3b2b57d07bc1afdb6e87c9

              </div>
            )
          }
        })
      } else {

        return this.props.price.map( price => {
          if(price.product_id === product.id && price.store_id === this.props.currStore.id && product.quantity > 0){
            total += price.price * product.quantity;
            return (
              <div className="prod-list">
                <p>{product.name}</p>
                <div className="c-list">
                  <div className="c-list">
                    <p>Quantity: {product.quantity}</p>
                  </div>
                  <div className="c-list">
                    <i className="material-icons">attach_money</i>
                    <p>Price: {price.price}</p>
                  </div>
                </div>

              </div>
            )
          }
        })

      }
    })
    total = total.toFixed(2);

    return (
      <div>
        {list}
        <p className="p-total waves-effect  btn-large">Total: {total}</p>
        </div>
    )
  }
}

export default StoreColumn;
