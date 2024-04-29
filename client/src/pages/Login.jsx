import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import BreadCrumb from "../components/common/BreadCrumb";

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://ecommerce-sagartmg2.vercel.app/api/users/login`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        toast.success("success");
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
        // console.log(err.response.data.errors);
        if (err.response?.status === 400) {
          console.log(err.response.data.errors);
          toast.error("bad request");
        } else if (err.response?.status === 401) {
          toast.error(err.response.data.msg);
        } else {
          toast.error("seomthing went wrong.try again later..");
        }
      });
  };
  return (
    <>
      <BreadCrumb title="My Account" />

      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="flex w-[240px] flex-col justify-center gap-2 md:w-[433px]">
          <p className="text-center text-xl font-bold md:text-[32px]">Login</p>
          <p className="text-xs text-[#9096B2] md:text-xl">
            Please login using account detail bellow.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="text"
                className="border p-2"
                value={formData.email}
                name="email"
                placeholder="Email Address"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="text"
                name="password"
                value={formData.password}
                className="border p-2"
                placeholder="Password"
              />
              <p className="text-xs text-[#9096B2] md:text-xl">
                Forgot your password?
              </p>
              <button className="w-full bg-secondary py-2 text-sm text-white">
                Sign in
              </button>
            </div>
          </form>
          <p className="text-xs text-[#9096B2] md:text-xl">
            Don't have an Account? <Link to={"/signup"}>Create account</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
