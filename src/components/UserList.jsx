import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import { withRouter } from 'react-router';
import {Button, Icon} from 'react-materialize';

class UserList extends Component{

  render(){
    return (
      <div className="card small blue-cl">
      <Button onClick={(e) => this.props.deleteCard(e, this.props.listName)} floating className='red dl-list' tooltip='Delete list' waves='light' icon='clear' />
        <Link to={`/users/${JSON.parse(localStorage.user).id}/lists/${this.props.listName.id}`}>
          <div className="card-action">
            <span className="card-title">{this.props.listName.name}</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default withRouter(UserList);