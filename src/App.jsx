import User from "./pages/User/User";
import Home from "./pages/Home/Home";
import Transaction from "./pages/Transaction/Transaction";
import Freeze from "./pages/Freeze/Freeze";
import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/transaction",
      element: <Transaction />,
    },

    {
      path: "/freeze",
      element: <Freeze />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
