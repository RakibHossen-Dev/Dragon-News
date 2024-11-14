import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <div>News</div>,
  },
  {
    path: "/auth",
    element: <div>Login</div>,
  },
  {
    path: "*",
    element: <div className="text-4xl font-bold">Opps</div>,
  },
]);

export default router;
