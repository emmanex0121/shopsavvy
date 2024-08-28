import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Dashboard from "./views/Dashboard/Dashboard";
import NotFound from "./views/NotFound/NotFound";
import ProductProvider from "./contexts/ProductContext";

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
      Component: () => {
        return (
          <ProductProvider>
            <Dashboard />
          </ProductProvider>
        );
      },
    },
    {
      path: "*",
      Component: NotFound,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
};

export default App;
