import { useState } from "react";
import "./App.css";
//

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ width: "100%" }}>
      <div style={{ border: "red solid 1px" }}>Remote App</div>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
}

export default App;
