import axios from "axios";
import React, { useState } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import { toast } from "react-toastify";
import ErrorMessage from "../../components/common/ErrorMessage";

function AddProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: null,
  });

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    if (e.target.name == "image") {
      setProductData({ ...productData, image: e.target.files[0] });
    } else {
      setProductData({ ...productData, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    let token = localStorage.getItem("token");

    let formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("image", productData.image);

    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIsLoading(false);
        toast.success("product added successfully.");
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          // console.log(err.response.data.errors);

          let errorsObj = {};

          err.response.data.errors.forEach((element) => {
            errorsObj[element.param] = element.msg;
          });

          setFormError(errorsObj);
        } else {
          toast.error("Something went wrong");
        }
        setIsLoading(false);
      });
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
                value={productData.name}
                placeholder="name"
              />
              <ErrorMessage msg={formError.name} />
            </label>
            <label>
              Price:
              <input
                className="w-full border p-2"
                type="text"
                name="price"
                onChange={handleChange}
                value={productData.price}
                placeholder="price"
              />
              <ErrorMessage msg={formError.price} />
            </label>
            <label>
              Image:
              <input
                type="file"
                name="image"
                onChange={handleChange}
                // value={productData.image}
              />
              <ErrorMessage msg={formError.image} />
            </label>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-secondary py-3 text-white disabled:cursor-not-allowed disabled:opacity-20"
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
