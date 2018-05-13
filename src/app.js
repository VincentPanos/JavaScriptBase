import React, { Component } from 'react';

class App extends Component {
  render() {
    const helloWorld = 'Working with react!'
    return(
      <div className="App">
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}
export default App;
