import React from "react";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";

function Product(props) {
  const [isHover, setIsHover] = useState(false);
  const { image, title, code, price } = props;

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="group relative  flex h-[400px] w-[220px] flex-col shadow-md sm:mx-auto "
    >
      {isHover && (
        <div className="absolute left-0 top-0 flex gap-2 p-3">
          <BsCart2 />
          <AiOutlineHeart />
          <AiOutlineZoomIn />
        </div>
      )}
      <img src={image} className="h-[65%] w-[100%] object-cover" alt="" />
      {/* <div className="grow bg-[#F6F7FB] pb-4 pl-7 pr-7 pt-10">
      </div> */}
      {isHover && (
        <button className="absolute left-[32%] top-[50%] bg-[#08D15F] px-1 py-1 text-sm text-white">
          View Details
        </button>
      )}
      <div className="flex grow flex-col items-center justify-center gap-3 group-hover:bg-[#2F1AC4]">
        <p className="text-lg font-bold text-[#FB2E86] group-hover:text-white">
          {title}
        </p>
        <div className="flex gap-2">
          <div className=" h-2 w-4 bg-[#05E6B7]"></div>
          <div className="h-2 w-4 bg-[#F701A8]"></div>
          <div className=" h-2 w-4 bg-[#00009D]"></div>
        </div>
        <p className="text-base font-bold text-[#151875] group-hover:text-white">
          Code - {code}
        </p>
        <p className="text-[#151875] group-hover:text-white">{price}</p>
      </div>
    </div>
  );
}

export default Product;
