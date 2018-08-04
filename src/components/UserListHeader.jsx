import React, {Component} from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import {
Link
} from 'react-router-dom';

class UserListHeader extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendToListPage = this.sendToListPage.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  sendToListPage(e) {
    e.preventDefault();
    let newListObj = {title: e.target.title.value,
                      products: []
                    };
                    console.log("in sending: ", newListObj);
    localStorage.setItem('listObj', JSON.stringify(newListObj));
    this.props.history.push({
      pathname: '/user_id/lists'
    });

  }

  render(){

    return (
      <div>
        <div className="float-blue">
          <h5 className="my-lists">My lists</h5>
          <a className="btn-floating btn-large waves-effect"><i className="material-icons">add</i></a>
        </div>
        <div>
          <button onClick={this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
            >
              <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>Enter Your List Name</div>
              <form onSubmit={this.sendToListPage}>
                <input name="title" />
                  {/* <Link to="/user_id/lists" className="center brand-logo">To list</Link> */}
                  <input type="submit" value="send" />
              </form>
            </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(UserListHeader);