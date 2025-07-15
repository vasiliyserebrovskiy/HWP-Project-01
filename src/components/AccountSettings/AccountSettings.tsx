import { useCurrentUser } from "../../hooks/useCurrentUser";
import style from "./AccountSettings.module.css";
export const AccountSettings = () => {
  const { user } = useCurrentUser();
  return (
    <section className={style.mainSection}>
      <div className={style.mainDiv}>
        <h2>Account settings</h2>
        {user ? (
          <div className={style.infoDiv}>Here might be some information.</div>
        ) : (
          <div className={style.noInfoDiv}>You need to login first</div>
        )}
      </div>
    </section>
  );
};
