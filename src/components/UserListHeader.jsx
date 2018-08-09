import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {
Link
} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import {Toast} from 'react-materialize';

class UserListHeader extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.sendToListPage = this.sendToListPage.bind(this);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  sendToListPage(e) {
    e.preventDefault();
    let newListObj = {name: e.target.title.value,
                      products: []
                    };
    localStorage.setItem('listObj', JSON.stringify(newListObj));

    window.Materialize.toast('List created!', 2000, 'success-alert');

    this.props.history.push({
      pathname: `/users/${JSON.parse(localStorage.user).id}/lists/new`
    });

  }

  render(){
    const { open } = this.state;
    return (
      <div className="float-blue">
          <h3 className="my-lists">My lists</h3>
          <a className="btn-floating btn-large waves-effect" alt="Create a new list" onClick={this.onOpenModal}><i className="material-icons">add</i></a>
          <Modal open={open} onClose={this.onCloseModal} center style={{width: '400px;'}}>
            <div className="new-list">
            
            <form onSubmit={this.sendToListPage}>
            Enter Your List Name
              <input type="search" name="title" />
                {/* <Link to="/user_id/lists" className="center brand-logo">To list</Link> */}
                <button type="submit" className="waves-effect btn-small search-btn">Save</button>
              {/* <input type="submit" value="send" /> */}
              </form>
              </div>
           
           
          </Modal>
        </div>
    );
  }
}

export default withRouter(UserListHeader);