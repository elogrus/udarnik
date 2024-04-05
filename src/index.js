import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Notfound from "./routes/Notfound/Notfound";
import Root from "./routes/Root/Root";
import Test from "./routes/Test/Test";
import Survival from "./routes/Survival/Survival";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
