import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../component/Dashboard/Dashboard";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../component/Home/Home";
import AddTherapists from "../component/AddTherapists/AddTherapists";
import axios from "axios";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "therapists",
                element: <AddTherapists/>
            }
        ]
    },
]);
