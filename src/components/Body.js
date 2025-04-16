import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";

const Body = () => {

  const dispatch = useDispatch();
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

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        
      } else {
        dispatch(removeUser());
      }
    });
  },[])

  return <RouterProvider router={appRouter} />;
};

export default Body;
