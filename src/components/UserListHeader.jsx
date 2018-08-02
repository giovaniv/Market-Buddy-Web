import React, {Component} from 'react';

class UserListHeader extends Component {

  render(){

    return (
        <div className="float-blue">
          <h5 className="my-lists">My lists</h5>
          <a className="btn-floating btn-large waves-effect"><i className="material-icons">add</i></a>
        </div>
    );

  }
}

export default UserListHeader;