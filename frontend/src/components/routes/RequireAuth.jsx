import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../../contexts/UserContext";

export default function RequireAuth({ allowedRoles }) {
  const { user } = useUserContext();
  const location = useLocation();

  return user?.roles === allowedRoles ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

RequireAuth.propTypes = {
  allowedRoles: PropTypes.string.isRequired,
};
