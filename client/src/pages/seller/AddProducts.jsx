import axios from "axios";
import React, { useState } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";

function AddProducts() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    iamge: null,
  });

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.name.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");

    axios
      .post(
        "https://ecommerce-sagartmg2.vercel.app/api/products",
        {
          name: formData.name,
          price: formData.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {})
      .catch((err) => {});
  }
  return (
    <>
      <BreadCrumb title="Add Products" />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-10">
            <label>
              Name:
              <input
                className="w-full border p-2"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="name"
              />
            </label>
            <label>
              Price:
              <input
                className="w-full border p-2"
                type="text"
                name="price"
                onChange={handleChange}
                value={formData.price}
                placeholder="price"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-secondary py-3 text-white"
            >
              Create new product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProducts;
