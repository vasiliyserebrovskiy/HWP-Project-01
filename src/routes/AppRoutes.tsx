import { Routes, Route } from "react-router-dom";
import { AccountSettings } from "../components/AccountSettings/AccountSettings";
import { UserInformation } from "../components/UserInformation/UserInformation";
import { ROUTES } from "../constants/routes";
import { MainLayout } from "../layout/MainLayout";
import { SettingsLayout } from "../layout/SettingsLayout";
import { About } from "../pages/About/About";
import { Contacts } from "../pages/Contacts/Contacts";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Registration from "../pages/Registration/Registration";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductPage from "../pages/ProductPage/ProductPage";
import UsersList from "../pages/UsersList/UsersList";
import UserPage from "../pages/UserPage/UserPage";
import Login from "../pages/Login/Login";
import AddProduct from "../pages/AddProduct/AddProduct";
import { Counter } from "../components/Counter/Counter";
import { CounterProvider } from "../providers/CounterProvider";
import ToggleCard from "../components/ToggleCard/ToggleCard";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <CounterProvider>
              <MainLayout />
            </CounterProvider>
          }
        >
          <Route index element={<Home />} />
          <Route path={ROUTES.COUNTER} element={<Counter />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsList />} />
          <Route path={ROUTES.PRODUCTS_ADD} element={<AddProduct />} />
          <Route path={ROUTES.PRODUCTS_ID} element={<ProductPage />} />
          <Route path={ROUTES.USERS} element={<UsersList />} />
          <Route path={ROUTES.USERS_ID} element={<UserPage />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.TOGGLE_CARD} element={<ToggleCard />} />
          <Route path={ROUTES.ACCOUNT} element={<SettingsLayout />}>
            <Route
              path={ROUTES.ACCOUNT_SETTINGS}
              element={<AccountSettings />}
            />
            <Route
              path={ROUTES.USER_INFORMATION}
              element={<UserInformation />}
            />
          </Route>
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
