import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import TopHeader from "./TopHeader";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <header>
        <TopHeader />

        <nav className="container pb-[12px] pt-[18px]">
          <div className="flex w-full items-center justify-between lg:w-auto lg:gap-[90px]">
            <a
              id="logo"
              href=""
              className="leading-auto  inline-block  border font-josefin text-[34px] font-semibold text-primary-dark hover:text-secondary"
            >
              Hekto
            </a>
            <div
              className={`${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} fixed bottom-0 right-0 top-0 z-20 flex   w-[50%] flex-col   bg-blue-300 p-12 transition-all ease-linear md:static md:w-auto  md:flex-row md:gap-4 md:bg-transparent md:p-0`}
            >
              <button
                className="absolute left-0 top-0 p-4 md:hidden"
                onClick={toggleMenu}
              >
                <RxCross2 />
              </button>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link to={"/"} className="text-secondary">
                  home
                </Link>
                <Link to={"/products"} className="hover:text-secondary">
                  products
                </Link>
                <Link
                  to={"/sellers/products"}
                  className="active:text-secondary"
                >
                  Seller-Products
                </Link>
                <Link to={"/sellers/products/add"}>Add-Products</Link>
                <Link className="hover:text-secondary">pages</Link>
                <Link className="hover:text-secondary">blogs</Link>
                <Link className="hover:text-secondary">members</Link>
              </div>
            </div>
            <IoMenu
              onClick={toggleMenu}
              className="cursor-pointer text-3xl md:hidden"
            />
            <form className="hidden lg:flex">
              <input
                className="w-[100px] border border-primary-light px-2 py-1 focus:border-secondary focus:outline-none focus:transition-all "
                type="text"
              />
              <button className="bg-secondary px-3">
                <CiSearch className="text-white" />
              </button>
            </form>
          </div>
        </nav>
        {isMenuOpen && (
          <div
            onClick={toggleMenu}
            className={` fixed bottom-0 left-0 right-0 top-0 z-10 bg-[rgba(0,0,0,0.5)]`}
          ></div>
        )}
      </header>
    </>
  );
}
