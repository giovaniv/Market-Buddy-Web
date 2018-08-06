import React, {Component} from 'react';

class AdminColumn extends Component{

  render() {
    return (
        <tr>
          <td>{this.props.productName}</td>
          <td>{this.props.productBrand}</td>
          <td className="price">{this.props.productPrice.price}</td>
          <td>{this.props.storeName}</td>
          <td> <a className="waves-effect waves-light btn-small">Edit</a> <button onClick={() => this.props.deleteProduct(this.props.productName, this.props.storeName)} className="waves-effect waves-light btn-small advisor">Delete</button></td>
        </tr>
    );
  }
}

export default AdminColumn;