import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';
import './App.css';
import DevTools from 'mobx-react-devtools';

// mobx.useStrict(true);

@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
          <DevTools />
        <p className="App-title">Mobx test ES.Next写法.</p>
        <div>
            <p>counter: {this.props.store.count}</p>
            <p>square: {this.props.store.square}</p>
            <button onClick={() => this.props.store.increment()}>+</button>
            <button onClick={() => this.props.store.decrement()}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
