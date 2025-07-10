import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import avatar from "./assets/poodle.jpeg";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import { GenderByName } from "./components/GenderByName/GenderByName";
import { profileName, profileDescription } from "./constants/variables";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { MainLayout } from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import NotFound from "./pages/NotFound/NotFound";
import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { SettingsLayout } from "./layout/SettingsLayout";
import { AccountSettings } from "./components/AccountSettings/AccountSettings";
import { UserInformation } from "./components/UserInformation/UserInformation";

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
