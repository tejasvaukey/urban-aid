// App.js
import {
  Navbar,
  ServiceProvider,
  Footer,
  HomePage,
  LandingPage,
  ProviderRegistration,
} from "./components/index";

import { Routes, Route, useLocation } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import Profile from "./pages/Profile";
import LoginCard from "./components/LoginCard";
import SearchPage from "./pages/SearchPage";

export default function App() {
  const location = useLocation();

  const hideOnRoutes = [
    "/register/user",
    "/register/provider",
    "/register/",
    "/register",
    "/profile",
  ];
  const shouldHide = hideOnRoutes.includes(location.pathname);

  return (
    <div className="relative min-h-screen">
      {!shouldHide && <Navbar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/register" element={<RegistrationPage />} />
        <Route exact path="/search" element={<SearchPage />} />
      </Routes>
      {!shouldHide && <Footer />}
    </div>
  );
}
