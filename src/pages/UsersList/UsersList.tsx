import { useEffect, useState } from "react";
import type { User } from "../../types";
import style from "./UserList.module.css";
import { Link } from "react-router-dom";

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users`);
    const usersRes = await res.json();
    setUsers(usersRes);
  }

  return (
    <div className={style.mainDiv}>
      <h2>Users list</h2>
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
    </div>
  );
}
