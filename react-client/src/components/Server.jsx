import React from 'react';
import ReactDOM from 'react-dom';
import ServerWaitlist from './ServerWaitlist';
import Inputblock from './Inputblock';

import '../css/Server.scss'

import axios from 'axios';

class Server extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'loading',
      items: []
    };
  };

  componentDidMount() {
    setInterval(() => {this.getData()}, 3000);
  };

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
  };

  render () {
    return (
      <div>
        {this.state.status === 'loading' ?
          (<div>Loading...</div>) :
          (
            <div className="serverblock">
              <div className="serverWaitlist">
                <ServerWaitlist items={this.state.items} />
              </div>
              <div className="serverInputblock">
                <Inputblock getData={this.getData.bind(this)}/>
              </div>
            </div>
          )
        }
      </div>
    );
  };
};

export default Server;
