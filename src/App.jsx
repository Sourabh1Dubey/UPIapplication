import User from "./pages/User/User";
import React, { useState } from "react";
import Home from "./pages/Home/Home";
import UserAdmin from "./pages/UserAdmin/UserAdmin";
import Transaction from "./pages/Transaction/Transaction";
import Admin from "./pages/Admin/Admin"
import Freeze from "./pages/Freeze/Freeze";
import SystemConfig from "./pages/SystemConfig/SystemConfig"
import AdminHistory from "./pages/AdminHistory/AdminHistory";
import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaymentHistory from "./pages/PaymentHistory/PaymentHistory";
import { createContext } from "react";
import AllUsers from "./pages/AllUsers/AllUsers";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserAdmin />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <Admin />,
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
    {
      path: "/systemconfig",
      element: <SystemConfig/>,
    },
    {
      path: "/adminHistory",
      element: <AdminHistory/>,
    },
    {
      path : "/allUsers",
      element : <AllUsers/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}
export default App;

