import User from "./pages/User/User";
import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Transaction from "./pages/Transaction/Transaction";
import Freeze from "./pages/Freeze/Freeze";
import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaymentHistory from "./pages/PaymentHistory/PaymentHistory";
import { createContext } from "react";

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
    {
      path: "/history",
      element: <PaymentHistory />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}
export default App;

