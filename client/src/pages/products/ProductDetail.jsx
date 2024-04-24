import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
      .then((res) => {
        setProduct(res.data.data);
      });
  }, []);

  return (
    <>
      {/* {console.log(product)} */}
      <div className="container grid items-stretch gap-2 p-6 shadow-xl md:grid-cols-2">
        <div className="grid  gap-2">
          <div className="grid grid-cols-3 items-stretch gap-2">
            <img src={product.image} className="object-cover" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div>
            <img src={product.image} className="object-fill" />
          </div>
        </div>
        <div className="flex flex-grow flex-col gap-4">
          <p className="font-semibold text-[#0D134E] md:text-[36px]">
            {product.name}
          </p>
          <div className="flex items-center gap-2">
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <span>(1000)</span>
          </div>
          <div className="flex gap-1 md:gap-2">
            <p className="font-bold text-[#151875]">$50000</p>
            <p className="font-bold text-[#FB2E86] line-through">$70000</p>
          </div>
          <p>Color</p>
          <p className="font-semibold text-[#A9ACC6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <div className="flex items-center justify-center gap-3">
            <p className="font-bold text-[#151875]">Add To cart</p>

            <CiHeart className="text-[#535399]" />
          </div>
          <p className="font-semibold text-[#151875]">
            Categories: {product.categories}
          </p>
          <p className="font-semibold text-[#151875]">Tags</p>
          <div className="flex gap-4 font-semibold text-[#151875]">
            <p>Share </p>
            <div className="flex gap-2">
              <img src="/assets/fbicon.png" alt="" />
              <img src="/assets/instaLogo.png" alt="" />
              <img src="/assets/twitterLogo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
