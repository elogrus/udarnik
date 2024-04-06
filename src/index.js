import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Notfound from "./routes/Notfound/Notfound";
import Root from "./routes/Root/Root";
import Test from "./routes/Test/Test";
import Survival from "./routes/Survival/Survival";
import ListWords from "./routes/ListWords/ListWords";
import Lifehacks from "./routes/Lifehacks/Lifehacks";

const router = createHashRouter([
    {
        path: "/",
        errorElement: <Notfound />,
        element: <Root />,
    },
    {
        path: "/test",
        errorElement: <Notfound />,
        element: <Test />,
    },
    {
        path: "/survival",
        errorElement: <Notfound />,
        element: <Survival />,
    },
    {
        path: "/listwords",
        errorElement: <Notfound />,
        element: <ListWords />,
    },
    {
        path: "/lifehacks",
        errorElement: <Notfound />,
        element: <Lifehacks />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
