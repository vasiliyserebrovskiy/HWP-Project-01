import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
      <nav className={style.navigation}>
        <Link to="/" className={style.link}>
          Home
        </Link>
        <Link to={ROUTES.REGISTRATION} className={style.link}>
          Sign up
        </Link>
        <Link to={ROUTES.GENDER_BY_NAME} className={style.link}>
          Gender by name
        </Link>
        <Link to={ROUTES.SPACE_MISSION} className={style.link}>
          Space mission
        </Link>
        <Link to={ROUTES.PROFILE_CARD} className={style.link}>
          Profile card
        </Link>
        <Link to={ROUTES.ABOUT} className={style.link}>
          About
        </Link>
        <Link to={ROUTES.CONTACTS} className={style.link}>
          Contacts
        </Link>
        <Link to={ROUTES.ACCOUNT} className={style.link}>
          My Account
        </Link>
      </nav>
    </>
  );
};
