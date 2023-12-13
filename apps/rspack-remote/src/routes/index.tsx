import { Link } from "react-router-dom";
import { useState } from "react";

export function IndexRoute() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <h1>Remote Index Route</h1>
      <pre>apps/rspack_remote/routes/index.tsx</pre>
      <button onClick={() => setCount(count + 1)}>Remote State {count}</button>
      <Link to="view">View</Link>
    </div>
  );
}
