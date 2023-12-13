import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px"
      }}
    >
      <div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "15px",
            padding: "0px"
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/a-remote-app">Remote</Link>
          </li>
          <li>
            <Link to="/runtime">Run Time Remote</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};
