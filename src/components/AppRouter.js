import Layout from "./Layout";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Error from "./Error";
import Cart from "./Cart";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRouter = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default AppRouter;
