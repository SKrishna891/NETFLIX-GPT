import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";



const Body = () => {

 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />, // Header is already inside Login
    },
    {
      path: "/browse",
      element: <Browse />, // No Header here
    },
  ]);

 

  return <RouterProvider router={appRouter} />;
};

export default Body;
