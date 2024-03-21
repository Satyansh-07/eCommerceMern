import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import ProductList from "pages/ProductList";
import ProductDetails from "pages/ProductDetails";
import Cart from "pages/Cart";
import Login from "pages/Login";

const ProjectRoutes = () => { 
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    { path: "/notFound", element: <NotFound /> },
    {
      path: "categorieswithsidebar",
      element: <CategorieswithSidebar />,
    },
    {
      path: "productList/:id",
      element: <ProductList />,
    },
    {
      path: "productList",
      element: <ProductList />,
    },
    {
      path: "productdetails/:pid",
      element: <ProductDetails />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "login",
      element: <Login />
    }
  ]);

  return element;
};

export default ProjectRoutes;
