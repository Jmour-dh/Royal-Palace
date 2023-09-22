import React, { useContext } from "react";
import { AuthContext } from "../../../components/context";

function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.lname}</li>
        <li>{user.email}</li>
      </ul>
    </div>
  );
}

export default Profile;
