import React from "react";
import "./UsersList.css";
// import Card from "./../UI/Card";

const UsersList = ({ users }) => {
  return (
    <div className="users">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}) years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
