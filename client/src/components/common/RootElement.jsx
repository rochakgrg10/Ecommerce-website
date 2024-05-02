import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function RootElement() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
