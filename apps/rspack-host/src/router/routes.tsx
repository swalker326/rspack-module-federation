import { RouteObject } from "react-router-dom";
import { IndexRoute } from "../routes/index";

import { routes as remoteRoutes } from "remote/routes";

import { AboutRoute } from "../routes/about";
import { Layout } from "../routes/layout";
import { createRuntimeRemote } from "../remotes/utils";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <IndexRoute /> },
      ...remoteRoutes,
      {
        path: "about",
        element: <AboutRoute />
      },
      {
        path: "runtime/*",
        element: createRuntimeRemote({
          url: "http://localhost:3002",
          scope: "runtime",
          module: "./App",
          fallback: "Loading Run Time"
        })()
      }
    ]
  }
];
