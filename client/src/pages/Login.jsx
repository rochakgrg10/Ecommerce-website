import React from "react";
import footerImg from "/assets/loginFooter.png";

function Login() {
  return (
    <>
      <div className="bg-[#F6F5FF]">
        <div className="mx-auto max-w-[210px] py-10">
          <p className="text-[20px] md:text-[36px]">My Account</p>
          <div className="flex flex-wrap gap-2 text-xs md:text-base">
            <a href="" className=" hover:text-secondary">
              Home
            </a>
            <a href="" className=" hover:text-secondary">
              Pages
            </a>
            <a href="" className=" hover:text-secondary">
              My Account
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="flex w-[240px] flex-col justify-center gap-2 md:w-[433px]">
          <p className="text-center text-xl font-bold md:text-[32px]">Login</p>
          <p className="text-xs text-[#9096B2]">
            Please login using account detail bellow.
          </p>
          <input
            type="text"
            className="border p-2"
            placeholder="Email Address"
          />
          <input type="text" className="border p-2" placeholder="Password" />
          <p className="text-xs text-[#9096B2]">Forgot your password?</p>
          <button className="w-full bg-secondary py-2 text-sm text-white">
            Sign in
          </button>
          <p className="text-xs text-[#9096B2]">
            Don't have an Account?Create account
          </p>
        </div>
      </div>

      <img src={footerImg} className="container my-[40px]" />

      <div className="grid grid-flow-row gap-4 bg-[#EEEFFB] p-[50px] sm:grid-cols-2 md:grid-cols-4 md:place-content-center">
        <div className="flex flex-col gap-4">
          <p className="text-[20px] font-bold">Hekto</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter email address"
              className="border"
            />
            <button className="bg-secondary px-2 py-1 text-xs text-white">
              Sign Up
            </button>
          </div>
          <p className="text-xs font-normal text-[#8A8FB9]">Contact Info</p>
          <p className="text-xs font-normal text-[#8A8FB9]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold">Catagories</p>
          <ul className="flex flex-col gap-2 text-xs font-normal text-[#8A8FB9]">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold">Customer Care</p>
          <ul className="flex flex-col gap-2 text-xs font-normal text-[#8A8FB9]">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold">Pages</p>
          <ul className="flex flex-col gap-2 text-xs font-normal text-[#8A8FB9]">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Login;
