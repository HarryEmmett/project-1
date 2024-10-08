import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Second from "./components/Second";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: () => console.log("hello"),
    children: [
      {
        path: "",
        element: <Main />,
        // loader: teamLoader,
      },
      {
        path: "second",
        element: <Second />,
        // loader: teamLoader,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <nav>A HEADER</nav>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
