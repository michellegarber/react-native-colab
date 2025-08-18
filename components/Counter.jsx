import { RestartAlt } from "@mui/icons-material";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter === 0) {
      alert("Counter cannot go below zero!");
      return;
    }
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="app">
      <h2>Counter App</h2>
      <div key={counter} className="counter-value pulse">
        <strong key={counter} className="pulse">
          {counter}
        </strong>
      </div>
      <div className="buttons">
        <div>
          <button onClick={() => increase()}>+</button>
        </div>
        <div>
          <button onClick={() => decrease()}>-</button>
        </div>
        <div>
          <button onClick={() => reset()}>
            <RestartAlt sx={{ fontSize: "27px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
