import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import DashboardLayout from './Layouts/DashboardLayout';
import MainLayout from './Layouts/MainLayout';
import EventLayout from './Layouts/EventLayout';
import UserProfileLayout from './Layouts/UserProfileLayout';
import ReportLayout from './Layouts/ReportLayout';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Layout */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <div>Login Page</div>
            </AuthLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <AuthLayout>
              <div>Sign Up Page</div>
            </AuthLayout>
          }
        />

        {/* Main Layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <DashboardLayout>
                <div>Dashboard Content</div>
              </DashboardLayout>
            </MainLayout>
          }
        />
        <Route
          path="/events"
          element={
            <MainLayout>
              <EventLayout>
                <div>Event List Content</div>
              </EventLayout>
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <UserProfileLayout>
                <div>User Profile Content</div>
              </UserProfileLayout>
            </MainLayout>
          }
        />
        <Route
          path="/reports"
          element={
            <MainLayout>
              <ReportLayout>
                <div>Reports Content</div>
              </ReportLayout>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
