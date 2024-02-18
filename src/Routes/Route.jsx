import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Home from "../Pages/HomePage/Home";
import Details from "../Pages/DetailsPage/Details";
import SingleBlogDetails from "../Pages/SingleBlogDetails/SingleBlogDetails";
import DashboardLayout from "../components/Layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/details/:id",
        element: <SingleBlogDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <p>hi</p>,
      },
    ],
  },
]);
