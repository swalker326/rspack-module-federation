import { Link, Route, Routes } from "react-router-dom";
import { IndexRoute } from "./routes/index";
//

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <h1>Dynamic Home</h1>
            <pre>apps/rspack-remote-runtime-routes/src/App.tsx</pre>
            <Link to="route">Go Deeper</Link>
          </div>
        }
      />
      <Route path="route" element={<IndexRoute />}>
        <Route path="about" element={<h1>Dynamic About</h1>} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
