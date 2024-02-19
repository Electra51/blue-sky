import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Home from "../Pages/HomePage/Home";
import Details from "../Pages/DetailsPage/Details";
import SingleBlogDetails from "../Pages/SingleBlogDetails/SingleBlogDetails";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import Dashboard from "../Pages/DashboardPages/DashboardHome/Dashboard";
import PostPage from "../Pages/DashboardPages/PostPage/PostPage";
import AddPost from "../Pages/DashboardPages/AddPost/AddPost";
import Category from "../Pages/DashboardPages/Category/Category";
import Tags from "../Pages/DashboardPages/Tags/Tags";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/LoginPage/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: <Dashboard />,
      },
      {
        path: "/dashboard/post",
        element: <PostPage />,
      },
      {
        path: "/dashboard/addPost",
        element: <AddPost />,
      },
      { path: "/dashboard/category", element: <Category /> },
      { path: "/dashboard/tags", element: <Tags /> },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
