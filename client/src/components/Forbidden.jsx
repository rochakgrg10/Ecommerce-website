import React from "react";
import BreadCrumb from "./common/BreadCrumb";

export default function Forbidden() {
  return (
    <>
      <BreadCrumb title="404 NOT Found" />
      <div className="container">
        <img src="/assets/NotFound.png" />
      </div>
    </>
  );
}
