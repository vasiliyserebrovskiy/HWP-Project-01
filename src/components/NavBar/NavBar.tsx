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
        <NavLink to={ROUTES.LOGIN} className={classSelector}>
          Sign in
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
        <NavLink to={ROUTES.PRODUCTS} className={classSelector}>
          Products
        </NavLink>
        <NavLink to={ROUTES.PRODUCTS_ADD} className={classSelector}>
          Add Product
        </NavLink>
        <NavLink to={ROUTES.USERS} className={classSelector}>
          Users
        </NavLink>
      </nav>
    </>
  );
};
