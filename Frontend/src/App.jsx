// App.js
import {
  Navbar,
  ServiceProvider,
  Footer,
  HomePage,
  LandingPage,
  UserRegistration,
  ProviderRegistration,
} from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  const hideOnRoutes = ["/register/user", "/register/provider"];
  const shouldHide = hideOnRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route
          exact
          path="/register/provider"
          element={<ProviderRegistration />}
        />
        <Route exact path="/register/user" element={<UserRegistration />} />
        <Route exact path="/provider" element={<ServiceProvider />} />
      </Routes>
      {!shouldHide && <Footer />}
    </>
  );
}
