"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
import Link from "next/link";

export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    if (name) {
      dispatch(addUser(name));
      setName(""); // Clear the input field after adding a user
    }
  }

  return (
    <div className="add-users-container">
      <h2 className="add-users-title">Add a New User</h2>
      <div className="add-users-form">
        <input
          type="text"
          className="add-users-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter new user"
        />
        <button className="add-users-button" onClick={userDispatch}>
          Add User
        </button>

        {/* <Link href="/removeuser">Remove User</Link> */}
      </div>
    </div>
  );
}
