import React from "react";

function BreadCrumb(props) {
  return (
    <div className="mb-[80px] flex flex-col gap-2 bg-[#F6F5FF] p-[50px] md:mb-[121px] md:gap-4">
      <p className="text-base font-bold text-[#101750] md:text-[36px]">
        {props.title}
      </p>
      <div className="flex gap-3 text-xs md:text-base">
        <p>Home</p>
        <p>Pages</p>
        <p className="text-secondary">Product Details</p>
      </div>
    </div>
  );
}

export default BreadCrumb;
