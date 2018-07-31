import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class UserProfile extends Component {

  constructor() {
    super();
    this.pageConstruct = this.pageConstruct.bind(this);
  }

  pageConstruct(currState) {
    console.log(currState);
    if(currState){
      return (<p>You are logged in</p>);
    }
    return (<p>You are not logged in</p>);
  }

  render() {
    // console.log(this.state.currUser);
    var page = this.pageConstruct(this.props.currUser);
    return(
      <div>
        {page}
      </div>
    );
  //   console.log(this.props.location);
  //   if(this.props.location.state === undefined) {
  //     return (
  //       <p>You don't have permissions to access this page</p>
  //       );
  //   }
  //   return (
  //       <div>
  //           <h1 >Hi, this is {this.props.location.state.detail.email}'s profile page</h1>
  //       </div>
  //   );
  // }
  }

}
export default UserProfile;