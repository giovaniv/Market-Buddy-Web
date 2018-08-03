import React, {Component} from 'react';

class UserList extends Component{
  render(){
    console.log('this.props.listName.name');
    return (
      <div className="card small blue-cl">
        <div className="card-action">
          <span className="card-title">{this.props.listName.name}</span>
          <a href="#"><i className="material-icons right">more_vert</i></a>
        </div>
      </div>
    );
  }
}

export default UserList