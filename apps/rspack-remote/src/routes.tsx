import { Outlet } from "react-router-dom";
import { View } from "./routes/view";
import { IndexRoute } from "./routes/index";

export const routes = [
  {
    path: "/a-remote-app",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <IndexRoute />
      },
      {
        path: "view",
        element: <View />
      }
    ]
  }
];
