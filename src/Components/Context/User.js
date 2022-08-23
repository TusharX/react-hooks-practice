import React from 'react';
import { UserContext } from "../../App";

function User() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => (
            <div>User : {user}</div>
          )
        }
      </UserContext.Consumer>
    </div>
  )
}

export default User;