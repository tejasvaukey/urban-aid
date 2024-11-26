// App.js
import { Navbar, Footer, HomePage, LandingPage } from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import Profile from "./components/settings/ProfilePage";
import SearchPage from "./pages/SearchPage";
import { useState } from "react";
import SettingsPage from "./pages/Settings";
import Account from "./pages/Account";

export default function App() {
  const location = useLocation();

  // Routes where Navbar and Footer should be hidden
  const hideOnRoutes = [
    "/register/user",
    "/register/provider",
    "/register/",
    "/register",
    "/profile",
    // Hides Navbar and Footer for `/account` page
  ];

  const shouldHide = hideOnRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  const [query, setQuery] = useState("");

  return (
    <div className="relative min-h-screen">
      {/* Conditionally render Navbar */}
      {!shouldHide && <Navbar setQuery={setQuery} />}

      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/register" element={<RegistrationPage />} />
        <Route exact path="/setting" element={<SettingsPage />} />

        {/* Account Page with Nested Routes */}
        <Route path="/account/*" element={<Account />} />

        <Route exact path="/search" element={<SearchPage query={query} />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!shouldHide && <Footer />}
    </div>
  );
}
