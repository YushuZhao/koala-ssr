import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { useRoutes } from "react-router-dom";
import { routes } from "../shared/routes";

const RouteElement = () => {
  const element = useRoutes(routes);
  return element;
};

const App = ({ url }) => {
  return (
    <StaticRouter location={url}>
      <RouteElement />
    </StaticRouter>
  );
};

const renderer = (req) => {
  const content = renderToString(<App url={req.url} />);

  return `
   <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
   </html>
  `;
};

export default renderer;

// 分包 如何将bundle注入到html
