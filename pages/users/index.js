import React, { Component } from 'react';
import User from '../../components/user';

class usersPage extends Component {
  state = {
    users: [
      {
        name: "Gábor",
        age: 25
      },
      {
        name: "Zsolt",
        age: 47
      },
      {
        name: "Ági",
        age: 16
      }
    ]
  };

  
  render() {
    let showUsers = this.state.users.map((user, index) => {
      return (
        <User key={index} name={user.name} age={user.age} />
      );
    });

    return (
      <div>
        <h1>users page</h1>
        {showUsers}
      </div>
    )
  }
}

export default usersPage;