import React from 'react';
import ServerWaitlistItem from './ServerWaitlistItem';

const ServerWaitlist = (props) => {
  return (
    <div>
      <h1>Waiting list</h1>
      <table>
        <tbody>
          <tr>
            <th>Waiting order</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Party</th>
            <th>Waiting Time</th>
            <th>Options</th>
          </tr>
          {props.items.map((item, index) => {
            return (
              <ServerWaitlistItem key={index} index={index} user={item}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ServerWaitlist;
