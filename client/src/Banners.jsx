import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="md:mx-auto md:w-11/12">
      <div className="bg-[#F2F0FF] bg-[url('./images/banner1.png')] bg-contain bg-no-repeat md:h-[680px] md:bg-cover">
        <div className="flex max-w-[300px] flex-col items-start justify-center p-4 md:ml-[300px] md:h-full md:max-w-[620px] md:gap-5">
          <p className="text-[#FB2E86]">Best Furniture For Your Castle....</p>
          <p className="font-bold md:text-5xl">
            New Furniture Collection Trends in 2020
          </p>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-[#FB2E86] font-semibold text-white md:my-10 md:h-[50px] md:w-[163px] md:text-base">
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-[#F2F0FF] bg-[url('./images/banner2.jpg')] bg-contain bg-no-repeat md:h-[680px] md:bg-cover">
        <div className="flex max-w-[300px] flex-col items-start justify-center p-4 md:ml-[300px] md:h-full md:max-w-[620px] md:gap-5">
          <p className="text-[#FB2E86]">Best Furniture For Your Castle....</p>
          <p className="font-bold md:text-5xl">
            New Furniture Collection Trends in 2020
          </p>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-[#FB2E86] font-semibold text-white md:my-10 md:h-[50px] md:w-[163px] md:text-base">
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-[#F2F0FF] bg-[url('./images/banner3.jpg')] bg-contain bg-no-repeat md:h-[680px] md:bg-cover">
        <div className="flex max-w-[300px] flex-col items-start justify-center p-4 md:ml-[300px] md:h-full md:max-w-[620px] md:gap-5">
          <p className="text-[#FB2E86]">Best Furniture For Your Castle....</p>
          <p className="font-bold md:text-5xl">
            New Furniture Collection Trends in 2020
          </p>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-[#FB2E86] font-semibold text-white md:my-10 md:h-[50px] md:w-[163px] md:text-base">
            Shop Now
          </button>
        </div>
      </div>
    </Slider>
  );
}

export default Banners;
