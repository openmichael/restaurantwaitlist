import React from 'react';

const WaitlistItem = (props) => {
  return (
    <div>
      <div>Name: {props.user.name}</div>
      <div>Phone: {props.user.phone}</div>
      <div>party: {props.user.party}</div>
      <div>Time: {props.user.date}</div>
    </div>
  );
};

export default WaitlistItem;
