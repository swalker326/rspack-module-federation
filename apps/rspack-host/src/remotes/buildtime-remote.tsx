import { Suspense, lazy } from "react";
import { importRemote } from "@module-federation/utilities/src/utils/importRemote";

const Buildtime = lazy(() =>
  importRemote({
    url: "http://localhost:3002",
    scope: "buildtime",
    module: "./App"
  })
);

const Component = () => {
  return (
    <Suspense fallback="Loading Buildtime">
      <Buildtime />
    </Suspense>
  );
};

export default Component;
