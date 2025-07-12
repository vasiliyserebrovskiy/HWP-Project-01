import { useEffect, useState } from "react";
import type { User } from "../../types";
import style from "./UserList.module.css";
import { Link } from "react-router-dom";

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users`);

      if (!res.ok) {
        throw new Error(`Request error: ${res.status} ${res.statusText}`);
      }

      const usersRes = await res.json();
      setUsers(usersRes);
    } catch (error) {
      setError(`Error receiving users list: ${error}`);
    }
  }

  return (
    <div className={style.mainDiv}>
      <h2>Users list</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className={style.usersDiv}>
          <ul>
            {users.map((u) => (
              <li key={"user" + u.id} className={style.userCard}>
                <img src={u.avatar} alt="user" />
                <h3>{u.name}</h3>
                <Link to={`/users/${u.id}`}>User details</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
