import React, {Component} from 'react';

class StoreColumn extends Component{

  render() {
    // console.log(this.props.product);

    var total = 0 ;

    const list = this.props.price.map( price => {
      return this.props.product.map( product => {
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
                  {/* <div className="c-list">
                  <i className="material-icons">shopping_cart</i>
                  <p>Total :{price.price * product.quantity}</p>
                  </div> */}
              </div>

            </div>
          )
        }
      })
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
