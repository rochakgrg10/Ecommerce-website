import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function RootElement({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Outlet />
      <Footer />
    </>
  );
}
