import React from "react";
import watch from "/assets/watch.png";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";
import BreadCrumb from "../components/common/BreadCrumb";

function LeftSideBar() {
  return (
    <>
      <BreadCrumb title="Left SideBar" />
      <div className="container">
        <div className="justify-between md:flex">
          <div>
            <p className="text-base font-bold text-[#151875] md:text-[22px]">
              Ecommerce Accessories & Fashion item{" "}
            </p>
            <p className="text-xs">About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="flex gap-2 text-xs text-[#3F509E] md:text-base">
            <label>
              Per Page:
              <input type="text" className="h-[25px] w-[55px] border" />
            </label>
            <label>
              Sort By:
              <input
                type="text"
                className="h-[25px] w-[55px] border md:w-[74px]"
              />
            </label>
            <label>
              View:
              <input type="text" className="h-[25px] w-[55px] border" />
            </label>
          </div>
        </div>
        <div className="mt-[40px] grid grid-cols-[40%_auto] md:mt-[100px] md:grid-cols-[30%_auto]">
          <div className="flex flex-col gap-4 text-xs text-[#151875] md:text-base">
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold underline md:text-xl">
                Product Brand
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <input type="checkbox" />
                  Coaster Furniture
                </li>
                <li>
                  <input type="checkbox" />
                  Fusion Dot High Fashion
                </li>
                <li>
                  <input type="checkbox" />
                  Unique Furnitture Restor
                </li>
                <li>
                  <input type="checkbox" />
                  Dream Furnitture Flipping
                </li>
                <li>
                  <input type="checkbox" />
                  Young Repurposed
                </li>
                <li>
                  <input type="checkbox" />
                  Green DIY furniture
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold underline md:text-xl">
                Discount Offer
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <input type="checkbox" />
                  20% Cashback
                </li>
                <li>
                  <input type="checkbox" />
                  5% Cashback Offer
                </li>
                <li>
                  <input type="checkbox" />
                  25% Discount Offer
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold underline md:text-xl">
                Rating Item
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <input type="checkbox" />
                  Coaster Furniture
                </li>
                <li>
                  <input type="checkbox" />
                  Coaster Furniture
                </li>
                <li>
                  <input type="checkbox" />
                  Coaster Furniture
                </li>
                <li>
                  <input type="checkbox" />
                  Coaster Furniture
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold underline md:text-xl">
                Categories
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <input type="checkbox" />
                  Prestashop
                </li>
                <li>
                  <input type="checkbox" />
                  Magento
                </li>
                <li>
                  <input type="checkbox" />
                  Bigcommerce
                </li>
                <li>
                  <input type="checkbox" />
                  osCommerce
                </li>
                <li>
                  <input type="checkbox" />
                  3dcart
                </li>
                <li>
                  <input type="checkbox" />
                  Bags
                </li>
                <li>
                  <input type="checkbox" />
                  Watches
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold underline md:text-xl">
                Price Filter
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <input type="checkbox" />
                  $0.0 - $150.0
                </li>
                <li>
                  <input type="checkbox" />
                  $150.0 - $350.0
                </li>
                <li>
                  <input type="checkbox" />
                  $350.0 - $500.0
                </li>
                <li>
                  <input type="checkbox" />
                  $500.00 +
                </li>
              </ul>
              <input
                type="text"
                placeholder="$10.00 - 20000$"
                className="w-[60%] border"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold underline md:text-xl">
                Filter By Color
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3">
                <div className="flex gap-1">
                  <div className="h-[14px] w-[14px] rounded-full bg-[#5E37FF]"></div>
                  <p>Blue</p>
                </div>
                <div className="flex gap-1">
                  <div className="h-[14px] w-[14px] rounded-full bg-[#FF9437]"></div>
                  <p>Orange</p>
                </div>
                <div className="flex gap-1">
                  <div className="h-[14px] w-[14px] rounded-full bg-[#FFBF95]"></div>
                  <p>Brown</p>
                </div>
                <div className="flex gap-1">
                  <div className="h-[14px] w-[14px] rounded-full bg-[#33D221]"></div>
                  <p>Green</p>
                </div>
                <div className="flex gap-1">
                  <div className="h-[14px] w-[14px] rounded-full bg-[#E248FF]"></div>
                  <p>Purple</p>
                </div>
                <div className="flex gap-1">
                  <div className="h-[14px] w-[14px] rounded-full bg-[#26CBFF]"></div>
                  <p>Sky</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="flex flex-col gap-2 bg-[#F8F6FDBF] p-4 text-[#111C85] shadow-lg md:flex-row">
              <img
                src={watch}
                className="h-[100px] w-[180px] md:h-[197px] md:w-[284px]"
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="font-bold md:text-2xl">Watch</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[12px] w-[12px] rounded-full bg-[#DE9034]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#E60584]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#5E37FF]"></div>
                  </div>
                </div>
                <div className="flex gap-3 text-xs md:text-base">
                  <p>$26.00</p>
                  <p className="text-[#FF2AAA] line-through">$52.00</p>
                </div>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div className="flex gap-4 text-xs md:text-xl">
                  <BsCart2 />
                  <AiOutlineHeart />
                  <AiOutlineZoomIn />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-[#F8F6FDBF] p-4 text-[#111C85] shadow-lg md:flex-row">
              <img
                src={watch}
                className="h-[100px] w-[180px] md:h-[197px] md:w-[284px]"
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="font-bold md:text-2xl">Watch</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[12px] w-[12px] rounded-full bg-[#DE9034]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#E60584]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#5E37FF]"></div>
                  </div>
                </div>
                <div className="flex gap-3 text-xs md:text-base">
                  <p>$26.00</p>
                  <p className="text-[#FF2AAA] line-through">$52.00</p>
                </div>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div className="flex gap-4 text-xs md:text-xl">
                  <BsCart2 />
                  <AiOutlineHeart />
                  <AiOutlineZoomIn />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-[#F8F6FDBF] p-4 text-[#111C85] shadow-lg md:flex-row">
              <img
                src={watch}
                className="h-[100px] w-[180px] md:h-[197px] md:w-[284px]"
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="font-bold md:text-2xl">Watch</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[12px] w-[12px] rounded-full bg-[#DE9034]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#E60584]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#5E37FF]"></div>
                  </div>
                </div>
                <div className="flex gap-3 text-xs md:text-base">
                  <p>$26.00</p>
                  <p className="text-[#FF2AAA] line-through">$52.00</p>
                </div>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div className="flex gap-4 text-xs md:text-xl">
                  <BsCart2 />
                  <AiOutlineHeart />
                  <AiOutlineZoomIn />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-[#F8F6FDBF] p-4 text-[#111C85] shadow-lg md:flex-row">
              <img
                src={watch}
                className="h-[100px] w-[180px] md:h-[197px] md:w-[284px]"
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="font-bold md:text-2xl">Watch</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[12px] w-[12px] rounded-full bg-[#DE9034]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#E60584]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#5E37FF]"></div>
                  </div>
                </div>
                <div className="flex gap-3 text-xs md:text-base">
                  <p>$26.00</p>
                  <p className="text-[#FF2AAA] line-through">$52.00</p>
                </div>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div className="flex gap-4 text-xs md:text-xl">
                  <BsCart2 />
                  <AiOutlineHeart />
                  <AiOutlineZoomIn />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-[#F8F6FDBF] p-4 text-[#111C85] shadow-lg md:flex-row">
              <img
                src={watch}
                className="h-[100px] w-[180px] md:h-[197px] md:w-[284px]"
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="font-bold md:text-2xl">Watch</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[12px] w-[12px] rounded-full bg-[#DE9034]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#E60584]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#5E37FF]"></div>
                  </div>
                </div>
                <div className="flex gap-3 text-xs md:text-base">
                  <p>$26.00</p>
                  <p className="text-[#FF2AAA] line-through">$52.00</p>
                </div>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div className="flex gap-4 text-xs md:text-xl">
                  <BsCart2 />
                  <AiOutlineHeart />
                  <AiOutlineZoomIn />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-[#F8F6FDBF] p-4 text-[#111C85] shadow-lg md:flex-row">
              <img
                src={watch}
                className="h-[100px] w-[180px] md:h-[197px] md:w-[284px]"
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="font-bold md:text-2xl">Watch</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[12px] w-[12px] rounded-full bg-[#DE9034]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#E60584]"></div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#5E37FF]"></div>
                  </div>
                </div>
                <div className="flex gap-3 text-xs md:text-base">
                  <p>$26.00</p>
                  <p className="text-[#FF2AAA] line-through">$52.00</p>
                </div>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div className="flex gap-4 text-xs md:text-xl">
                  <BsCart2 />
                  <AiOutlineHeart />
                  <AiOutlineZoomIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
