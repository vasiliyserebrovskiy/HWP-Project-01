import { ROUTES } from "../../constants/routes";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? style.navLinkActive : style.navLink;
  };

  return (
    <>
      <nav className={style.navBar}>
        <NavLink to="/" className={classSelector}>
          Home
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign up
        </NavLink>
        <NavLink to={ROUTES.GENDER_BY_NAME} className={classSelector}>
          Gender by name
        </NavLink>
        <NavLink to={ROUTES.SPACE_MISSION} className={classSelector}>
          Space mission
        </NavLink>
        <NavLink to={ROUTES.PROFILE_CARD} className={classSelector}>
          Profile card
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={classSelector}>
          About
        </NavLink>
        <NavLink to={ROUTES.CONTACTS} className={classSelector}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>
          My Account
        </NavLink>
        <NavLink to="/products" className={classSelector}>
          Products
        </NavLink>
        <NavLink to="/Users" className={classSelector}>
          Users
        </NavLink>
      </nav>
    </>
  );
};
