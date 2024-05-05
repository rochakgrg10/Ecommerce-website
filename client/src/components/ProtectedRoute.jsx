import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Forbidden from "./Forbidden";

function ProtectedRoute({ role }) {
  let user = useSelector((store) => store.user.value);
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  if (user.role != role) {
    return (
      <>
        <Forbidden />
      </>
    );
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
