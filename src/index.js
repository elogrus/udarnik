import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";
import Aboutme from "./routes/Aboutme/Aboutme";
import Lifehacks from "./routes/Lifehacks/Lifehacks";
import ListWords from "./routes/ListWords/ListWords";
import Notfound from "./routes/Notfound/Notfound";
import Root from "./routes/Root/Root";
import Survival from "./routes/Survival/Survival";
import Test from "./routes/Test/Test";

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
    {
        path: "/aboutme",
        errorElement: <Notfound />,
        element: <Aboutme />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
