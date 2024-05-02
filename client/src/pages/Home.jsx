import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "../components/common/Header";
import Banner from "../components/home/Banner";
import Product from "../components/home/Product";
import LatestProduct from "../components/home/LatestProduct";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let banners = [
    {
      background: "bg-banner1",
      label: "Best Furniture For Your Castle....",
      heading: " New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/blogs",
    },
    {
      background: "bg-banner2",
      label: "Second Furniture For Your Castle....",
      heading: " Second Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/offers",
    },
    {
      background: "bg-banner3",
      label: "Third Furniture For Your Castle....",
      heading: " Third Furniture Collection Trends in 2020",
      description:
        "Third ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/products",
    },
  ];

  let latestProducts = [
    {
      image: "/assets/latestProduct1.png",
      title: "Comfort Handy Craft",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct2.png",
      title: "Comfort Handy Craft 2",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct3.png",
      title: "Comfort Handy Craft 3",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct4.png",
      title: "Comfort Handy Craft 4",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct5.png",
      title: "Comfort Handy Craft 5",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct6.png",
      title: "Comfort Handy Craft 6",
      currentPrice: "$200",
      previousPrice: "$250",
    },
  ];

  useEffect(() => {
    let url = `https://ecommerce-sagartmg2.vercel.app/api/products/trending`;
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setProducts(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          throw new Error("Something went wrong");
        });
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <Slider {...settings}>
          {banners.map((el) => {
            return (
              <Banner
                background={el.background}
                label={el.label}
                heading={el.heading}
                description={el.description}
                redirectUrl={el.redirectUrl}
              />
            );
          })}
        </Slider>

        {isLoading && (
          <div className="container mt-20 grid justify-items-center  gap-1 sm:grid-cols-2 md:mt-[219px] md:grid-cols-4">
            <Skeleton className="h-[400px] w-[220px]" />
            <Skeleton className="h-[400px] w-[220px]" />
            <Skeleton className="h-[400px] w-[220px]" />
            <Skeleton className="h-[400px] w-[220px]" />
          </div>
        )}

        {!isLoading && products.length == 0 && <p>No products</p>}

        <div className="container  mt-20 grid justify-items-center gap-4 sm:grid-cols-2  md:mt-[219px] md:grid-cols-2 lg:grid-cols-4">
          {products.map((el) => {
            return (
              <Product
                _id={el._id}
                image={el.image}
                name={el.name}
                code={el.code}
                price={el.price}
              />
            );
          })}
        </div>

        <div className="container mb-14 mt-16">
          <p className="text-center text-[23px] font-bold text-[#151875] md:text-[42px]">
            Latest Products
          </p>
          <div className="mt-5 flex justify-center gap-2 text-sm md:gap-4 md:text-[18px]">
            <a href="" className="hover:text-secondary">
              New Arrival
            </a>
            <a href="" className="hover:text-secondary">
              Best Seller
            </a>
            <a href="" className="hover:text-secondary">
              Featured
            </a>
            <a href="" className="hover:text-secondary">
              Special Offer
            </a>
          </div>
          <div className="mt-[32px] grid justify-items-center gap-4 sm:grid-cols-2 md:mt-[58px] md:grid-cols-3">
            {latestProducts.map((el) => {
              return (
                <LatestProduct
                  image={el.image}
                  title={el.title}
                  currentPrice={el.currentPrice}
                  previousPrice={el.previousPrice}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
