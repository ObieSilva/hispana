// components/UserList.js
import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api/requests";
import { addUser } from "../api/requests";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.log("Failed to fetch users:", error);
      }
    };

    getUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const addedUser = await addUser(userData);
      console.log("User successfully added:", addedUser);
      setUserData({ name: "", email: "", password: "" }); // Clear form after successful addition
      const updatedUsers = await fetchUsers(); // Optionally re-fetch users to update the list
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email} - {user._id}
          </li> // Adjust according to your user object structure
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserList;
