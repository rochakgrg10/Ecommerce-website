import React, { useEffect, useState } from "react";
import axios from "axios";

function SellerProducts() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem("token");

    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
  return (
    <div>
      {JSON.stringify(products)}
      SellerProducts
    </div>
  );
}

export default SellerProducts;
