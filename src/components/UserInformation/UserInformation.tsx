import { useCurrentUser } from "../../hooks/useCurrentUser";
import style from "./UserInformation.module.css";

export const UserInformation = () => {
  const { user } = useCurrentUser();
  return (
    <section className={style.mainSection}>
      <div className={style.mainDiv}>
        <h2>User information</h2>
        {user ? (
          <div className={style.userInfoDiv}>
            <img src={user.avatar} alt="avatar" />
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
          </div>
        ) : (
          <span>You need to login first</span>
        )}
      </div>
    </section>
  );
};
