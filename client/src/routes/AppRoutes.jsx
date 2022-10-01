//External Import
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//Internal Import
import RecoveryPasswordPage from "../pages/AccountRecoveryPage/RecoveryPasswordPage";
import SendOptPage from "../pages/AccountRecoveryPage/SendOptPage";
import VerifyOptPage from "../pages/AccountRecoveryPage/VerifyOptPage";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegistrationPage from "../pages/AuthPage/RegistrationPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SingleTemplatePage from "../pages/TemplatePage/SingleTemplatePage";
import TemplatePage from "../pages/TemplatePage/TemplatePage";
import ChangePasswordPage from "../pages/UserPage/ChangePasswordPage";
import ProfilePage from "../pages/UserPage/ProfilePage";

const AppRoutes = () => {
  const { accessToken } = useSelector((state) => state.Auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            accessToken ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={accessToken ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={
            accessToken ? <Navigate to="/dashboard" /> : <RegistrationPage />
          }
        />
        <Route
          path="/forgot-password"
          element={accessToken ? <Navigate to="/dashboard" /> : <SendOptPage />}
        />
        <Route
          path="/verify-otp"
          element={
            accessToken ? <Navigate to="/dashboard" /> : <VerifyOptPage />
          }
        />
        <Route
          path="/reset-password"
          element={
            accessToken ? (
              <Navigate to="/dashboard" />
            ) : (
              <RecoveryPasswordPage />
            )
          }
        />
        <Route
          path="/dashboard"
          element={accessToken ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/template"
          element={accessToken ? <TemplatePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/template/:id"
          element={
            accessToken ? <SingleTemplatePage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/profile"
          element={accessToken ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/change-password"
          element={
            accessToken ? <ChangePasswordPage /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
