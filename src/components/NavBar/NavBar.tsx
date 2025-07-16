import { ROUTES } from "../../constants/routes";
import { useCounter } from "../../hooks/useCounter";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? style.navLinkActive : style.navLink;
  };
  const { user, setIsAuthorized, isAuthorized } = useCurrentUser();
  const { counter } = useCounter();

  function handleLogout() {
    setIsAuthorized(false);
  }

  return (
    <>
      <nav className={style.navBar}>
        <NavLink to="/" className={classSelector}>
          Home
        </NavLink>
        <NavLink to={ROUTES.COUNTER} className={classSelector}>
          Counter
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
        <NavLink to={ROUTES.TOGGLE_CARD} className={classSelector}>
          Toggle Card
        </NavLink>
        {user?.email}
        <span className={style.counterSpan}>{counter}</span>
        {isAuthorized ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </nav>
    </>
  );
};
