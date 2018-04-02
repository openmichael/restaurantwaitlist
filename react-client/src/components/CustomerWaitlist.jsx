import React from 'react';
import CustomerWaitlistItem from './CustomerWaitlistItem';

const CustomerWaitlist = (props) => {
  return (
    <div>
      <h1>Waiting list</h1>
      <table>
        <tbody>
          <tr>
            <th>Waiting order</th>
            <th>Name</th>
            <th>Party</th>
            <th>Waiting Time</th>
            <th>Options</th>
          </tr>
          {props.items.map((item, index) => {
            return (
              <CustomerWaitlistItem key={index} index={index} user={item}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerWaitlist;
