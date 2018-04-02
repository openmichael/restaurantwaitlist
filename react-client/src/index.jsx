import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Customer from './components/Customer';
import Server from './components/Server';

import './css/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Customer} />
            <Route path='/server' component={Server} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
