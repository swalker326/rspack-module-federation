import { useState } from "react";
import { Outlet } from "react-router-dom";

export function IndexRoute() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1>Host App </h1>
        <pre>apps/rspack_host/routes/index.tsx</pre>
        <button onClick={() => setCount(count + 1)}>Host State {count}</button>
      </div>
      <Outlet />
    </div>
  );
}
