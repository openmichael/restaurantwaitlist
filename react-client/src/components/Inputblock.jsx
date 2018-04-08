import React from 'react';
import axios from 'axios';

import '../css/inputblock.scss';

class Inputblock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      party: '',
    };
  };

  handleOnClick(event) {
    event.stopPropagation();

    axios.post('/user', {
        name: this.state.name,
        phone: this.state.phone,
        party: this.state.party,
        date: new Date()
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      name: '',
      phone: '',
      party: ''
    });

    this.props.getData();
  };

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="inputform">
        <div className="input">
          Name: <input type="text" value={this.state.name} name="name" onChange={this.handleOnChange.bind(this)}></input>
        </div>
        <div className="input">
          Phone: <input type="tel" value={this.state.phone} name="phone" onChange={this.handleOnChange.bind(this)}></input>
        </div>
        <div className="input">
          Party: <input type="number" value={this.state.party} name="party" onChange={this.handleOnChange.bind(this)}></input>
      </div>
      <button className="inputbutton" type="button" onClick={this.handleOnClick.bind(this)}>Enter</button>
    </div>
    );
  };
};

export default Inputblock;
