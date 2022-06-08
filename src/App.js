import logo from "./logo.svg";
import "./App.css";
import Info from "./Info";
import { useState } from "react";
import Counter from "./Counter";
import Info2 from "./Info2";
import Average from "./Average";
import Average2 from "./Average2";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Average2 />
      <Counter />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기시" : "보이기"}
      </button>
      <hr />
      {visible && <Info2 />}
    </div>
  );
}

export default App;
