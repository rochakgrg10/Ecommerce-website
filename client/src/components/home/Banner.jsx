import React from "react";

export default function Banner(props) {
  return (
    <>
      <div className={`${props.background} bg-cover bg-no-repeat md:h-[680px]`}>
        <div className="xxl:py-[210px] container flex flex-col items-start justify-center p-4 sm:py-[130px] md:gap-4 md:py-[148px] lg:py-[166px] xl:py-[188px]">
          <p className="text-sm font-bold text-secondary">{props.label}</p>
          <p className="xxl:text-[53px] text-base font-bold sm:text-[33px] md:text-[37px] lg:text-[42px]  xl:text-[47px]">
            {props.heading}
          </p>
          <p className="text-sm text-[#8A8FB9]">{props.description}</p>
          <button className="btn mt-4 text-sm" to={props.redirectUrl}>
            Shop now
          </button>
        </div>
      </div>
    </>
  );
}
