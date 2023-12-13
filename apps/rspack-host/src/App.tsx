import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>Host App </h1>
        <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
          <li>
            <Link to="/a-remote-app">Remote</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <pre>rspack_host/App.tsx</pre>
        <button onClick={() => setCount(count + 1)}>Host State {count}</button>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
