import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  let user = useSelector((store) => store.user.value);
  if (!user) {
    <Navigate to={"/login"} />;
  }
  return (
    <div>
      <p>Protected routes</p>
      {/* <Outlet /> */}
    </div>
  );
}

export default ProtectedRoute;
