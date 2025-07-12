import { useState, useEffect } from "react";
import type { User } from "../../types";
import { useParams } from "react-router-dom";
import style from "./UserPage.module.css";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [error, setError] = useState<string>("");

  async function fetchUser(id: string | undefined) {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);

      if (!res.ok) {
        throw new Error(`Request error: ${res.status} ${res.statusText}`);
      }

      const userRes = await res.json();
      setUser(userRes);
    } catch (error) {
      setError(`Error receiving user details: ${error}`);
    }
  }

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  return (
    <section className={style.mainSection}>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className={style.mainDiv}>
          <h2>User Info</h2>
          <h3>Name: {user?.name}</h3>
          <img src={user?.avatar} alt="user picture" />
          <p>Email: {user?.email}</p>
          <p>Role: {user?.role}</p>
        </div>
      )}
    </section>
  );
}
