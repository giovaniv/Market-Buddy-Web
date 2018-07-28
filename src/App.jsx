import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      turtles: []
    };
  }


  handleThatOneButton() {
    fetch('/turtles').then(d => d.json()).then(b => {
      this.setState({turtles: b.turtles})
    }).catch(err => console.warn(err))
  }

  render() {
    return (
      <div>
        <h1>Hello React :)</h1>
        <button onClick={this.handleThatOneButton.bind(this)}>Click this</button>
        {
          this.state.turtles &&
          <table>
            <tbody>
              {this.state.turtles.map(turtle => <tr><td>{turtle}</td></tr>)}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
export default App;
