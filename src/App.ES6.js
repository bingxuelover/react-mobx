import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';
import './App.css';

// mobx.useStrict(true);

const TodoView = inject("store")(observer(class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-title">Mobx test ES6写法.</p>
        <div>
            <p>counter: {this.props.store.count}</p>
            <p>square: {this.props.store.square}</p>
            <button onClick={() => this.props.store.increment()}>+</button>
            <button onClick={() => this.props.store.decrement()}>-</button>
        </div>
      </div>
    );
  }
}))

export default TodoView;
