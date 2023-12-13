import { Suspense, lazy } from "react";
import { importRemote } from "@module-federation/utilities/src/utils/importRemote";

export const createRuntimeRemote = ({
  url,
  scope,
  module,
  fallback
}: {
  url: string;
  scope: string;
  module: string;
  fallback?: React.ReactNode;
}) => {
  const RuntimeRemote = lazy(() =>
    importRemote({
      url,
      scope,
      module
    })
  );
  const Component = () => {
    return (
      <Suspense fallback={fallback ? fallback : "Loading Runtime Component"}>
        <RuntimeRemote />
      </Suspense>
    );
  };

  return Component;
};
