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
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "",
      element: <RootElement user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login setUser={setUser} />,
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
