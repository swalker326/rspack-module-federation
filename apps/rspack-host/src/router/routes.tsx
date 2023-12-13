import { RouteObject } from "react-router-dom";
import { IndexRoute } from "../routes/index";

import { routes as remoteRoutes } from "remote/routes";
import BuildTime from "../remotes/buildtime-remote";
import { AboutRoute } from "../routes/about";
import { Layout } from "../routes/layout";

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
        path: "buildtime/*",
        element: <BuildTime />
      }
    ]
  }
];
