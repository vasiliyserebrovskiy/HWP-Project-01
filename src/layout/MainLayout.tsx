import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import style from "./MainLayout.module.css";

export const MainLayout = () => {
  return (
    <>
      <div className={style.layout}>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
        </footer>
      </div>
    </>
  );
};
