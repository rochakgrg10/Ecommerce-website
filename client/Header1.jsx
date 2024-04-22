import React from "react";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { TbUser } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

function Header() {
  const [dropdown, setDropdown] = useState(false);

  const toggleBtn = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <header>
        {/* first nav */}
        <nav className="bg-primary font-josefin text-sm text-white md:flex md:h-[44px] md:justify-evenly md:text-xl">
          <div className="justify-between md:container md:flex">
            <div className="items-center justify-center gap-3 md:flex">
              <p className="inline-flex gap-2">
                <MdEmail /> mhhasanul@gmail.com <FaPhoneVolume /> (12345)67890
              </p>
            </div>
            <div className="inline-flex items-center justify-center gap-3 md:flex">
              English <IoIosArrowDown />
              USD <IoIosArrowDown /> Login <TbUser />
              Whislist <CiHeart /> <FiShoppingCart />
            </div>
          </div>
        </nav>

        {/* second nav */}
        <nav className="flex h-16 items-center justify-between gap-2 px-12 md:container">
          <div>
            <p
              id="logo"
              className="font-josefin text-lg font-semibold leading-[normal] text-primary-dark md:text-[34px]"
            >
              Hekto
            </p>
          </div>
          <div
            className={`absolute md:static ${
              dropdown ? "top-[105px]" : "-top-full"
            } right-0 z-10 flex w-full flex-col items-end`}
          >
            <ul className="items-center justify-center gap-4 text-base md:flex">
              <li className="inline-flex items-center justify-center gap-2 text-secondary md:flex">
                Home <IoIosArrowDown />
              </li>
              <li>Pages</li>
              <li>Products</li>
              <li>Blog</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex">
            <input
              type="text"
              className="h-6 w-20 border border-primary-light focus:border-secondary md:h-[40px] md:w-[317px]"
            />
            <CiSearch className="h-6 bg-secondary text-white md:h-[40px] md:w-[51px]" />
          </div>
          <div className="sm:block md:hidden">
            <FaBars onClick={toggleBtn} className="cursor-pointer" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
