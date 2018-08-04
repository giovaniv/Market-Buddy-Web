import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import { withRouter } from 'react-router';

class UserList extends Component{
  render(){
    return (
      // <Link to="/user/" + this.props.userId + "/list/" + this.props.listName.id>
        <div className="card small blue-cl">
          <div className="card-action">
            <span className="card-title">{this.props.listName.name}</span>
            <a href="#"><i className="material-icons right">more_vert</i></a>
          </div>
        </div>
      // </Link>
    );
  }
}

export default withRouter(UserList);