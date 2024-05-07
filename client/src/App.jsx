import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RootElement from "./components/common/RootElement";

import "./index.css";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/products/ProductDetail";
import Signup from "./pages/Signup";
import LeftSideBar from "./pages/LeftSideBar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import SellerProducts from "./pages/seller/SellerProducts";
import AddProducts from "./pages/seller/AddProducts";
import { useDispatch } from "react-redux";
import { setReduxUser } from "./redux/slice/userSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import { BUYER, SELLER } from "./constant/role";
import Forbidden from "./components/Forbidden";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "sidebar",
        element: <LeftSideBar />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "sellers",
        element: <ProtectedRoute role={SELLER} />,
        children: [
          {
            path: "products",
            children: [
              {
                path: "",
                element: <SellerProducts />,
              },
              {
                path: "add",
                element: <AddProducts />,
              },
            ],
          },
        ],
      },
      {
        path: "products",
        children: [
          {
            path: "",
            element: <Products />,
          },
          {
            path: ":slug",
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "*",
        element: <Forbidden />,
      },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setReduxUser(res.data));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      console.log("there is no token available");
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      ) : (
        <div>
          <RouterProvider router={router} />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;
