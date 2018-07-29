import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class Test extends Component {

  render() {
    if(this.props.location.state.detail){
      console.log(this.props.location.state.detail);
    }
    return (
        <div>
            <h1 >Hello, world!</h1>
        </div>
    );
  }
}
export default Test;