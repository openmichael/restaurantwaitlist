import React from 'react';
import ReactDOM from 'react-dom';
import Waitlist from './components/Waitlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render () {
    return (<Waitlist/>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
