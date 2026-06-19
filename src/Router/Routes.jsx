import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Order from "../components/Order";
import PrivateRoutes from "./PrivateRoutes";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
        {
            path : "/",
            Component : Home
        },
        {
            path : "/login",
            Component : Login
        },
        {
            path : "/register",
            Component : Register
        },
        {
            path : "/orders",
            element : <PrivateRoutes><Order></Order></PrivateRoutes>
        }
    ]
  },
]);
