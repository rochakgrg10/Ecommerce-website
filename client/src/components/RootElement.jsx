import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function RootElement() {
  return (
    <div>
      <header className="flex gap-4">
        <Link to="/"></Link>
        <Link to="/login"></Link>
      </header>

      <Outlet />
    </div>
  );
}
