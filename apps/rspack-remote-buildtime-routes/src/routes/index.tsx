import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export function IndexRoute() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Build-Time Routes</h1>
      <Link to="about">Even Deeper</Link>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Buildtime
      </button>
      <div>Count: {count}</div>
      <Outlet />
    </div>
  );
}
