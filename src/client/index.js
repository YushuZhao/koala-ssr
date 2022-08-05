import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "../shared/routes";

const RouteElement = () => {
  const element = useRoutes(routes);
  return element;
};

const App = () => {
  return (
    <BrowserRouter>
      <RouteElement />
    </BrowserRouter>
  );
};

hydrateRoot(document.getElementById("root"), <App />);
