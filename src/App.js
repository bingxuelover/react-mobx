import {Provider} from 'mobx-react';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

import {appState} from './store/store';
import AppES6 from './App.ES6';
import AppESNext from './App.ESNext';
import './App.css';
// mobx.useStrict(true);

const TodoView = class App extends Component {
  render() {
    return (
        <Provider store={appState}>
          <Router>
              <div>
                  <ul>
                    <li><Link to="/">Mobx ES6</Link></li>
                    <li><Link to="/next">Mobx ESNext</Link></li>
                  </ul>

                  <hr/>
                  
                  <Route exact path="/" component={AppES6}/>
                  <Route path="/next" component={AppESNext}/>
                  <DevTools />
              </div>
          </Router>
      </Provider>
    );
  }
}

export default TodoView;
