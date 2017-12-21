
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';

import About from './components/About';

class App extends Component {
  constructor() {
    super()
 }
  componentDidMount() {
  }

    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <br/>
              <Switch>
                <Route exact path='/' render={() => (
                  <div>
                    <About />
                  </div>
                )} />
                <Route exact path='/about' component={About}/>
              </Switch>
            </div>
          </div>
        </div>
      )
    }
}

export default App
