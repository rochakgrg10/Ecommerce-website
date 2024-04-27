import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/common/BreadCrumb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleEye = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    console.log("sucess");
    axios
      .post(`https://ecommerce-sagartmg2.vercel.app/api/users/signup`, {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value,
      })
      .then(() => {
        toast.success("success");
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        // console.log(err.response.data.errors);
        toast.error("failure");
        setIsError(true);
        setFormError(err.response.data.errors);
        setIsLoading(false);
      });
  };

  const errorMessage = (inputParam) => {
    let error = formError.find((el) => el.param == inputParam);
    let msg = error?.msg;
    return msg;
  };

  return (
    <>
      <BreadCrumb title="Signup" />
      <ToastContainer />
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="flex w-[240px] flex-col justify-center gap-4 md:w-[433px]">
          <p className="text-center text-xl font-bold md:text-[32px]">signup</p>
          <p className="text-xs text-[#9096B2] md:text-xl">
            Please signup using account detail bellow.
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border p-2"
                placeholder="name"
              />

              {isError && (
                <p className="text-xs text-red-600 md:text-base">
                  {errorMessage("name")}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="w-full border p-2"
                placeholder="Email Address"
              />
              {isError && (
                <p className="text-xs text-red-600 md:text-base">
                  {errorMessage("email")}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="relative flex">
                <input
                  type={isOpen ? "text" : "password"}
                  name="password"
                  className=" w-full border p-2"
                  placeholder="Password"
                />
                {isOpen ? (
                  <VscEyeClosed
                    className="absolute right-1 cursor-pointer self-center text-xl"
                    onClick={toggleEye}
                  />
                ) : (
                  <VscEye
                    className="absolute right-1 cursor-pointer self-center text-xl"
                    onClick={toggleEye}
                  />
                )}
              </div>
              {isError && (
                <p className="text-xs text-red-600 md:text-base">
                  {errorMessage("password")}
                </p>
              )}
            </div>
            <div>
              <select
                placeholder="Role"
                className="form-control"
                name="role"
                id=""
              >
                <option value="">Select Role</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
              </select>
              {isError && (
                <p className="text-xs text-red-600 md:text-base">
                  {errorMessage("role")}
                </p>
              )}
            </div>
            <p className="text-xs text-[#9096B2] md:text-xl">
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
            <button
              disabled={isLoading}
              className=" w-full bg-secondary py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isLoading ? "loading..." : "Sign up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
