import React from 'react';
import ReactDOM from 'react-dom';
import CustomerWaitlist from './CustomerWaitlist';
import Inputblock from './Inputblock';

import axios from 'axios';

class Customer extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'loading',
      items: []
    }
  }

  componentDidMount() {
    setInterval(() => {this.getData()}, 3000);
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
              <CustomerWaitlist items={this.state.items} />
              <Inputblock getData={this.getData.bind(this)}/>
            </div>
          )
        }
      </div>
    );
  }
}

export default Customer;
