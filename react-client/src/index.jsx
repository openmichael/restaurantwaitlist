import React from 'react';
import ReactDOM from 'react-dom';
import Waitlist from './components/Waitlist';
import Inputblock from './components/Inputblock';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      items: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/items')
      .then((response) => {
        this.setState({
          status: 'done',
          items: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render () {
    return (
      <div>
        {this.state.status === 'loading' ?
          (<div>Loading...</div>) :
          (
            <div>
              <Waitlist items={this.state.items} />
              <Inputblock getData={this.getData.bind(this)}/>
            </div>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
