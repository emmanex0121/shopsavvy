import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Dashboard from "./views/Dashboard/Dashboard";
import NotFound from "./views/NotFound/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/register",
      Component: Register,
    },
    {
      path: "/dashboard",
      Component: Dashboard,
    },
    {
      path: "*",
      Component: NotFound,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
