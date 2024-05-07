import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function Blog() {
  return (
    <>
      <BreadCrumb title="Blog page" />
      <div className="container">
        <img src="/assets/blogimage.png" alt="" />
        <div className="mt-7 flex gap-10 font-bold text-[#151875]">
          <div className="flex items-center gap-2">
            <FaPenNib />
            <div className="bg-[#FFE7F9] px-6">
              <p className="">Surf Auxion</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SlCalender />
            <div className="bg-[#FFE7F9] px-6">
              <p>Aug 09 2020</p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <p className="text-3xl font-bold text-[#151875]">
            Mauris at orci non vulputate diam tincidunt nec.
          </p>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold text-[#151875]">Read More</p>
            <div className="h-3 w-3 rounded-full bg-[#FB2E86]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
