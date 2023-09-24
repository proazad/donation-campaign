import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import CampDetails from "../Pages/CampDetails/CampDetails";
import Donations from "../Pages/Donations/Donations";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
const Route = createBrowserRouter([
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
        path: "/details/:id",
        element: <CampDetails />,
        loader: ()=> fetch("/data.json")
      },
      {
        path: "/donations",
        element: <Donations />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default Route;
