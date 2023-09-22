<<<<<<< HEAD
import React, { useContext } from "react";
import { AuthContext } from "../../../components/context";
=======
import React from 'react';

>>>>>>> 40508b5d03d6ab32516ab2d1b51596e0a69ad356

function Profile() {
  const { user } = useContext(AuthContext);
  return (
<<<<<<< HEAD
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.lname}</li>
        <li>{user.email}</li>
      </ul>
    </div>
  );
=======
    <>
    
    </>
  )
>>>>>>> 40508b5d03d6ab32516ab2d1b51596e0a69ad356
}

export default Profile;
