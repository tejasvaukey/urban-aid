// App.js
import {
  Navbar,
  Footer,
  HomePage,
  LandingPage,
} from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import Profile from "./pages/Profile";
import SearchPage from "./pages/SearchPage";
import { useState } from "react";
import SettingsPage from "./pages/Settings";

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

  const [query, setQuery] = useState('')

  return (
    <div className="relative min-h-screen">
      {!shouldHide && <Navbar setQuery={setQuery} />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/register" element={<RegistrationPage />} />
        <Route exact path="/setting" element={<SettingsPage />} />
        <Route exact path="/search" element={<SearchPage query={query} />} />
      </Routes>
      {!shouldHide && <Footer />}
    </div>
  );
}
