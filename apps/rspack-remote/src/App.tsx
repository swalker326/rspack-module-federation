import { useState } from "react";
//

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ width: "100%" }}>
      <div style={{ border: "red solid 1px" }}>Remote App</div>
      <pre>apps/rspack_remote/App.tsx</pre>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
}

export default App;
