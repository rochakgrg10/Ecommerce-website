import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
  return (
    <div>
      <h1>Welcome to products page</h1>
      {JSON.stringify(products)}
    </div>
  );
}

export default Products;
