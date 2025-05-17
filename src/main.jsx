import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import CardDetails from "./components/CardDetails/CardDetails.jsx";
import CardList from "./components/CardList/CardList.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card/:product_id",
        element: <CardDetails />,
        loader: async () => {
          const res = fetch("/20_products_by_category.json");
          const data = (await res).json();
          return data;
        },
      },
      {
        path: "/dashboard",
        element: <CardList></CardList>,
        loader: () => fetch("/20_products_by_category.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>
);
