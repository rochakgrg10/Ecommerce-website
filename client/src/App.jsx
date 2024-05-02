import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
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
// import { useEffect } from "react";

function App() {
  /*  useEffect(() => {
    localStorage.getItem("userData");
  }); */

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
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
