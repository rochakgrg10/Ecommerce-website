import React from "react";

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
    </>
  );
}

export default Login;
