import { Routes, Route } from "react-router-dom";
import { AccountSettings } from "../components/AccountSettings/AccountSettings";
import { GenderByName } from "../components/GenderByName/GenderByName";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SpaceMissionForm from "../components/SpaceMissionForm/SpaceMissionForm";
import { UserInformation } from "../components/UserInformation/UserInformation";
import { ROUTES } from "../constants/routes";
import { profileName, profileDescription } from "../constants/variables";
import { MainLayout } from "../layout/MainLayout";
import { SettingsLayout } from "../layout/SettingsLayout";
import { About } from "../pages/About/About";
import { Contacts } from "../pages/Contacts/Contacts";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Registration from "../pages/Registration/Registration";
import avatar from "../assets/poodle.jpeg";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductPage from "../pages/ProductPage/ProductPage";
import UsersList from "../pages/UsersList/UsersList";
import UserPage from "../pages/UserPage/UserPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.GENDER_BY_NAME} element={<GenderByName />} />
          <Route path={ROUTES.SPACE_MISSION} element={<SpaceMissionForm />} />
          <Route
            path={ROUTES.PROFILE_CARD}
            element={
              <ProfileCard
                avatar={avatar}
                name={profileName}
                description={profileDescription}
              />
            }
          />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path={"/products/:id"} element={<ProductPage />} />
          <Route path="/users" element={<UsersList />} />
          <Route path={"/users/:id"} element={<UserPage />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
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
