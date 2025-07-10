import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import style from "./SettingsLayout.module.css";

export const SettingsLayout = () => {
  return (
    <section className={style.section}>
      <div className={style.mainDiv}>
        <h2>Settings</h2>
        <nav>
          <Link to={ROUTES.ACCOUNT_SETTINGS} className={style.link}>
            Account Settings
          </Link>
          <Link to={ROUTES.USER_INFORMATION} className={style.link}>
            User Information
          </Link>
        </nav>
        <Outlet />
      </div>
    </section>
  );
};
