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
      <Button floating large className='red dl-list' tooltip='Delete list' waves='light' icon='clear' />
        <div className="card-action">
          <span className="card-title">{this.props.listName.name}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(UserList);