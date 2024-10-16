import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const NavigationProvider = () => {
  return <RouterProvider router={router} />;
};

export default NavigationProvider;
