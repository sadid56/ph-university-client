import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes
  },
]);

export default router;
