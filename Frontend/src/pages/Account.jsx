import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import {
    BookingHistory,
    ProfilePage,
    // Dashboard,
    ExploreProviders,
    FavoritesPage,
    Notifications,
    WalletHistory,
    PendingBookings,
    Referrals,
    Settings,
    SupportHelp,
    FeedbackPage
  } from "../components/settings";

const Account = () => {
  return (
    <div className="flex min-h-screen pt-20">
      {/* Sidebar */}
      <div className="w-1/5 bg-teal-900 text-white p-4 space-y-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="booking-history"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Booking History
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="pending-bookings"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Pending Bookings
            </NavLink>
          </li> */}
          <li>
            {/* <NavLink
              to="explore-providers"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Explore Providers
            </NavLink> */}
          </li>
          <li>
            <NavLink
              to="notifications"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="favorites"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="help-support"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Help & Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="feedback"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Feedback
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="wallet-payment-history"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Wallet/Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="referrals"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-700 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Referrals
            </NavLink>
          </li>
          
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-gray-100">
        <Routes>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="booking-history" element={<BookingHistory />} />

          <Route path="notifications" element={<Notifications />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="help-support" element={<SupportHelp />} />
          <Route path="feedback" element={<FeedbackPage />} />

          <Route path="settings" element={<Settings />} />
          <Route path="wallet-payment-history" element={<WalletHistory />} />
          <Route path="referrals" element={<Referrals />} />

          <Route path="*" element={<Navigate to="profile" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default Account;
