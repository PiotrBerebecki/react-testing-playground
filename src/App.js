import React, { Component } from 'react';

import Display from './Display';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="container">
        Welcome to testing
        <button onClick={this.handleClick}>Click me :)</button>
        <p className="parent__display">Count in parent: {this.state.count}</p>
        <Display count={this.state.count} />
      </div>
    );
  }
}

export default App;
