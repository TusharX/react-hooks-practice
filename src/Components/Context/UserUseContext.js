import React, { useContext } from 'react';
import { UserContext } from "../../App";


function UserUseContext() {
  const user = useContext(UserContext);
  return (
    <div>
      <p>User Use Context</p>
      <p>User : <strong>{user}</strong></p>
    </div>
  )
}

export default UserUseContext;