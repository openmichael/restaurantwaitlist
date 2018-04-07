import React from 'react';
import axios from 'axios';

class ServerWaitlistItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
  };

  componentDidMount() {
    this.waitTime();
  };

  removeUser(event) {
      // console.log(props.user._id);
      axios.post('/remove_user', {
          _id: this.props.user._id
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  waitTime() {
    let curTime = new Date();
    let time = new Date(this.props.user.date);
    let diffTime = Math.floor((curTime.getTime() - time.getTime()) / 60000);
    this.setState({
      time: diffTime
    });
  };

  notifyUser() {
    axios.post('/notifyUser', {
        phone: this.props.user.phone
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.phone}</td>
        <td>{this.props.user.party}</td>
        <td>{this.state.time} minutes</td>
        <td>
          <button type="button" onClick={this.removeUser.bind(this)}>Served</button>
          <button type="button" onClick={this.notifyUser.bind(this)}>Notify Customer</button>
        </td>
      </tr>
    );
  };

};

export default ServerWaitlistItem;
