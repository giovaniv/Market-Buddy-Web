import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import UserSideBar from './UserSideBar.jsx';
import UserListHeader from './UserListHeader.jsx'
import Footer from './Footer.jsx'
import UserList from './UserList.jsx';
import {post} from 'axios';


function searchItemId(anArr, target){
  for(var i = 0; i < anArr.length; i++){
    if(anArr[i].id == target){
      return anArr[i];
    }
  }
  return -1;
}

class UserProfile extends Component {

  constructor() {
    super();
    this.deleteCard = this.deleteCard.bind(this)
  }

  componentWillMount() {
    // if(this.props.location.state.detail){
    //    window.Materialize.toast(`Welcome back ${JSON.parse(localStorage.user).name}`, 2000, 'success-alert');
    // }
    if(localStorage.success){
      window.Materialize.toast(`Welcome back ${JSON.parse(localStorage.user).name}`, 2000, 'success-alert');
      localStorage.removeItem('success')
    } else if(localStorage.register) {
      window.Materialize.toast(`Welcome to Market Buddy ${JSON.parse(localStorage.user).name}!`, 2000, 'success-alert');
      localStorage.removeItem('register')
    }
  }

  deleteCard(e, list){
    e.preventDefault();

    post("http://localhost:7000/lists/delete", list)
    .then(response => response.data)
    .then(deletedUser => {

      var ownedArray = JSON.parse(localStorage.list);

      for(var i = 0; i < ownedArray.length; i++){
        if(ownedArray[i].id === list.id){
          console.log(list.name);
          ownedArray.splice(i, 1);
        }
      }
      localStorage.setItem('list', JSON.stringify(ownedArray));

      window.Materialize.toast(`List ${list.name} has been deleted`, 2000, 'fail-alert');

      this.props.history.push({
        pathname: "/users/"+ JSON.parse(localStorage.user).id
      });
    });
  }


  render() {
    if(!localStorage.user){
      return(<div></div>);
    } else {
      var userList;
      if(localStorage.list){
        const parsedStorage = JSON.parse(localStorage.list);
        userList = parsedStorage.map((list) => {
          // return (<Link to={`/users/${JSON.parse(localStorage.user).id}/lists/${list.id}`} key={list.id}><UserList listName={list} userId={JSON.parse(localStorage.user).id} /></Link>)
          return (<UserList listName={list} deleteCard={this.deleteCard} userId={JSON.parse(localStorage.user).id} key={list.id} />)
        });
      } else {
        userList = function(){return(<p>You do not have any shopping lists</p>)};
      }
      return(
        <div>
        <NavBar />
        <main>
          {/* <!-- Page Layout here --> */}
          <div className="row">
            <UserSideBar />
              <div className="col s12 m8 l9" id="right">
                <UserListHeader />
                <div className="row grid-lists">
                  {userList}
                </div>
              </div>
            </div>
          </main>
          <Footer />
      </div>
     )
    }
  }

}
export default withRouter(UserProfile);