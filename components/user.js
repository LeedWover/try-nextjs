import React from 'react';

const User = props => (
  <div>
    <h1>{props.name}</h1>
    <h3>{props.age}</h3>
  </div>
);

export default User;