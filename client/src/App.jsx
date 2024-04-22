import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import RootElement from "./components/RootElement";

import "./index.css";

function App() {
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
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
