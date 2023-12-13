import { Outlet, RouteObject } from "react-router-dom";
import App from "../App";

import { routes as remoteRoutes } from "remote/routes";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <App /> },
      ...remoteRoutes,
      {
        path: "about",
        element: <div>about</div>
      }
    ]
  }
];
