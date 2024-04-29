import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
function TopHeader({ user, setUser }) {
  return (
    <div className="bg-primary">
      <nav className=" py-[14px] text-center font-josefin text-white sm:container sm:flex sm:justify-between">
        <div className="sm:flex sm:gap-4">
          <p>
            <CiMail className="inline-block" /> mhhasanul@gmail.com
          </p>
          <p>
            <CiMail className="inline-block" /> 092345234
          </p>
        </div>
        <div className="flex gap-4">
          <p>{user?.name}</p>
          {user ? (
            <p
              onClick={() => setUser(null)}
              className="cursor-pointer hover:text-secondary"
            >
              Logout
            </p>
          ) : (
            <Link to={"/login"} className="hover:text-secondary">
              login
            </Link>
          )}
          <Link to={"/sidebar"}>ShopLeftSidebar</Link>
          <span className="ml-4">cart</span>
        </div>
      </nav>
    </div>
  );
}

export default TopHeader;
