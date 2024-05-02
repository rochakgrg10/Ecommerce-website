import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { logout, setReduxUser } from "../../redux/slice/userSlice";

function TopHeader() {
  let reduxUser = useSelector((store) => store.user.value);
  let cartItems = useSelector((store) => store.cart.value);
  let dispatch = useDispatch();

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
          <p>{JSON.stringify(reduxUser?.name)}</p>

          {reduxUser ? (
            <p
              onClick={() => dispatch(logout())}
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
          <div className="flex">
            <Link to={"/cart"}>
              <FaShoppingCart />
            </Link>
            <div className="h-5 w-5 rounded-full border bg-secondary text-center">
              {cartItems.length}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopHeader;
