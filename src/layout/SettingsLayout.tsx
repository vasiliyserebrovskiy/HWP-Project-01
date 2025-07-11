import { Outlet } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import style from "./SettingsLayout.module.css";
import { NavLink } from "react-router-dom";

export const SettingsLayout = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? style.navLinkActive : style.navLink;
  };
  return (
    <section className={style.section}>
      <div className={style.mainDiv}>
        <h2>Settings</h2>
        <nav className={style.navBar}>
          <NavLink to={ROUTES.ACCOUNT_SETTINGS} className={classSelector}>
            Account Settings
          </NavLink>
          <NavLink to={ROUTES.USER_INFORMATION} className={classSelector}>
            User Information
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </section>
  );
};
