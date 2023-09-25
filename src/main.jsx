import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home";
import Donation from "./components/Donation/Donation";
import Statistics from "./components/Statistics/Statistics";
import MainLayout from "./components/MainLayout/MainLayout";
import DonationDetails from "./components/DonationDetails/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
