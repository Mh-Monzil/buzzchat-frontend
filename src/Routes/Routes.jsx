import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/Login";
import SignUp from "../pages/singup/SignUp";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            }
        ]
    }
])