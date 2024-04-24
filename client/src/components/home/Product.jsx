import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";

function Product(props) {
  const { image, title, code, price } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/products/${props._id}`);
      }}
      className="group relative flex  h-[400px] w-[220px] flex-col overflow-hidden shadow-md hover:cursor-pointer sm:mx-auto"
    >
      <div className="absolute -top-[50px] left-0 flex gap-2 p-3 text-[#1389FF] transition-all duration-1000 group-hover:top-1">
        <BsCart2 className="rounded-full bg-[#EEEFFB] p-1  md:text-2xl" />
        <AiOutlineHeart className="rounded-full bg-[#EEEFFB] p-1  md:text-2xl" />
        <AiOutlineZoomIn className="rounded-full bg-[#EEEFFB] p-1  md:text-2xl" />
      </div>
      <button className="absolute -left-[40%] top-[50%] bg-[#08D15F] px-1 py-1  text-sm text-white transition-all duration-700 group-hover:left-[32%]">
        View Details
      </button>
      <img src={image} className="h-[65%] w-[100%] object-cover" alt="" />
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
        <p className="text-[#151875] group-hover:text-white">${price}</p>
      </div>
    </div>
  );
}

export default Product;
