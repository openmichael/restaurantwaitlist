import React from 'react';
import WaitlistItem from './WaitlistItem';

const Waitlist = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Waiting list</h1>
      {props.items.map((item, index) => {
        return (<WaitlistItem key={index} user={item}/>);
      })}
    </div>
  );
};

export default Waitlist;
