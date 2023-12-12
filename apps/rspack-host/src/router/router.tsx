import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Suspense, lazy } from "react";
// @ts-ignore
// const Remote = lazy(() => import("remote/App"));

//@ts-ignore
const Remote = await import("remote/App").then((m) => {
  // console.log("\x1b[32m%s\x1b[0m", m.default || m);
  // //eslint-disable-next-line
  // //@ts-ignore
  // console.log(__webpack_require__.federation);
  return m.default || m;
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "remote",
        element: (
          <Suspense>
            <Remote />
          </Suspense>
        )
      },
      {
        path: "about",
        element: <div>about</div>
      }
    ]
  }
]);
