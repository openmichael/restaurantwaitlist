import React from 'react';
import ReactDOM from 'react-dom';
import CustomerWaitlist from './CustomerWaitlist';
import Inputblock from './Inputblock';

import '../css/Customer.scss';

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
            <div className="customerBlock">
              <div className="customerWaitlist">
                <CustomerWaitlist items={this.state.items} />
              </div>
              <div className="inputblock">
                <Inputblock getData={this.getData.bind(this)}/>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Customer;
