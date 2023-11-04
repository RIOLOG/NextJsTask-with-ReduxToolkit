"use client"
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function DisplayUsers() {
  const dispatch = useDispatch();
  const userData = useSelector((data) => data.users);

  return (
    <div className="display-users">
      <h2 className="display-users-title">User List</h2>
      <div className="user-list">
        {userData.map((item) => (
          <div className="user-item" key={item.id}>
            <div className="user-details">
              <span className="user-name">{item.name}</span>
            </div>
            <button
              onClick={() => dispatch(removeUser(item.id))}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
